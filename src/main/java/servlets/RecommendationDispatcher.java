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
		
		
	}

}
