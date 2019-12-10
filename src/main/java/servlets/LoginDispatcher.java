package servlets;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import daos.UserDao;
import daos.UserDaoImpl;
import models.LoginForm;
import models.User;
import utility.Exceptions;
import utility.JsonReader;

public class LoginDispatcher implements Dispatcher {
	User loggedInUser = null;
	UserDao userDao = UserDaoImpl.getInstance();

	@Override
	public boolean isSupported(HttpServletRequest req) {

		return isLoginRequest(req);
	}

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		try {
			LoginForm credentials = (LoginForm) JsonReader.read(req.getInputStream(), LoginForm.class);
			loggedInUser = userDao.login(credentials.getUsername(), credentials.getPassword());
			
			if (loggedInUser == null) {
				resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED); // Unauthorized status code
				return;
			} else {
				resp.setStatus(HttpServletResponse.SC_OK);
				req.getSession().setAttribute("user", loggedInUser);
				resp.getOutputStream().write(JsonReader.write(loggedInUser));
				return;
			}
		} catch (IOException e) {
			Exceptions.logJsonUnmarshalException(e, LoginForm.class);
		}

	}

	private boolean isLoginRequest(HttpServletRequest req) {
		return req.getMethod().equals("POST") && req.getRequestURI().equals("/GameRecommender/login");
	}

}