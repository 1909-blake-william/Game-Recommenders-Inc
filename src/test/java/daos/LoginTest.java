package daos;

import org.junit.Test;

import models.LoginForm;
import models.User;

public class LoginTest {
	
	User loggedInUser = null;
	UserDao userDao = UserDaoImpl.getInstance();
	
	@Test
	public void loginTest() {
		LoginForm credentials = new LoginForm("admin", "password");
		loggedInUser = userDao.login(credentials.getUsername(), credentials.getPassword());
		if(loggedInUser != null) {
			assert loggedInUser.getUsername().equals("admin");
		} else {
			assert false; // Object is null
		}
	}
}
