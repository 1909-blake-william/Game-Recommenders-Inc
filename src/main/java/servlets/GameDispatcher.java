package servlets;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GameDispatcher implements Dispatcher{

	@Override
	public boolean isSupported(HttpServletRequest request) {
		// Uses POST /add-game
		// 
		return false;
	}

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		
	}

}
