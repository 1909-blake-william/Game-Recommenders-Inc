package daos;

import models.User;

public interface UserDao {
	
	UserDao currentImplementation = new UserDaoImpl();
	
	User login(String username, String password);
	void register(String username, String password);
	
	
}
