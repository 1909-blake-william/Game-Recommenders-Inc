package servlets;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import daos.UserDao;
import daos.UserDaoImpl;
import models.LoginForm;
import utility.Exceptions;
import utility.JsonReader;

public class RegisterUserDispatcher implements Dispatcher{
	private final Logger logger = LogManager.getLogger(getClass());
	UserDao userDao = UserDaoImpl.getInstance();
	
	@Override
	public boolean isSupported(HttpServletRequest request) {
		return request.getMethod().equals("POST") && request.getRequestURI().equals("/GameRecommender/register");
	}

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		logger.info("Attempting to register user");
		try {
			LoginForm credentials = (LoginForm) JsonReader.read(request.getInputStream(), LoginForm.class);
			int toSave = userDao.register(credentials.getUsername(), credentials.getPassword());
			
			if (toSave == 0) {
				response.setStatus(HttpServletResponse.SC_BAD_REQUEST); // Failed status code
				return;
			} else {
				response.setStatus(HttpServletResponse.SC_CREATED); // Created status code
				return;
			}
		} catch (IOException e) {
			Exceptions.logJsonUnmarshalException(e, LoginForm.class);
		}
	}

}
