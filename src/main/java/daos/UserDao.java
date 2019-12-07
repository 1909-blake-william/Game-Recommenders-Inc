package daos;

import models.User;

public interface UserDao {
	
	User login(String username, String password);
	
	void register(String username, String password);
	
	
}
