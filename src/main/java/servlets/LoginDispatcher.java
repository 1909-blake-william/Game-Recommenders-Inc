package servlets;

import java.io.InputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import daos.UserDao;
import daos.UserDaoImpl;
import models.LoginForm;
import models.User;
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
		LoginForm credentials = (LoginForm) JsonReader.read((InputStream) req, User.class);
		loggedInUser = userDao.login(credentials.getUsername(), credentials.getPassword());
		if (loggedInUser == null) {
			resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED); // Unauthorized status code
			return;
		} else {
			resp.setStatus(HttpServletResponse.SC_OK);
			req.getSession().setAttribute("user", loggedInUser);
			return;
		}
		
	}
	
	private boolean isLoginRequest(HttpServletRequest req) {
		return req.getMethod().equals("POST") && req.getRequestURI().equals("/gri/login");
	}

}