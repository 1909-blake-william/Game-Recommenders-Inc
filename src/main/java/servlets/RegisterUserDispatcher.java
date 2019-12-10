package servlets;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RegisterUserDispatcher implements Dispatcher{

	@Override
	public boolean isSupported(HttpServletRequest request) {
		// Uses POST /register
		return false;
	}

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		
	}

}
