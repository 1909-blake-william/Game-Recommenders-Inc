package servlets;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import daos.UserDao;
import daos.UserDaoImpl;

public class RegisterUserDispatcher implements Dispatcher{

	UserDao userDao = UserDaoImpl.getInstance();
	
	@Override
	public boolean isSupported(HttpServletRequest request) {
		return request.getMethod().equals("POST") && request.getRequestURI().equals("/GameRecommender/register");
	}

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		
	}

}
