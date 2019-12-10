package servlets;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import models.LoginForm;
import utility.Exceptions;
import utility.JsonReader;

public class RecommendationDispatcher implements Dispatcher{

	@Override
	public boolean isSupported(HttpServletRequest request) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
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

}
