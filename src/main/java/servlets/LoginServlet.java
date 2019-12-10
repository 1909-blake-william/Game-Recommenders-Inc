package servlets;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import daos.UserDao;
import models.LoginForm;
import models.User;
import utility.JsonReader;


@SuppressWarnings("serial")
public class LoginServlet extends HttpServlet {
	User loggedInUser = null;
	UserDao userDao = UserDao.currentImplementation;

	@Override
	//what exactly is this method doing
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { 
		resp.addHeader("Access-Control-Allow-Origin", "http://localhost:5500");
		resp.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
		resp.addHeader("Access-Control-Allow-Headers",
				"Origin, Methods, Credentials, X-Requested-With, Content-Type, Accept");
		resp.addHeader("Access-Control-Allow-Credentials", "true");
		resp.setContentType("application/json");
		super.service(req, resp);
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setAttribute("user", null);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		if ("/ReimbProj/login".equals(req.getRequestURI())) {
			
			LoginForm credentials = (LoginForm) JsonReader.read((InputStream) req, User.class); //
		
			loggedInUser = userDao.login(credentials.getUsername(), credentials.getPassword());
			if (loggedInUser == null) {
				resp.setStatus(401); // Unauthorized status code
				return;
			} else {
				resp.setStatus(201);
				req.getSession().setAttribute("user", loggedInUser);
				return;
			}
		}
	}
}