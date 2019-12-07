package daos;

import java.sql.ResultSet;
import java.util.List;

import models.User;

public class UserDaoImpl implements UserDao {

	@Override
	public User extractUser(ResultSet rs) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public long save(User u) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User findByCred(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User findByUserName(int author) {
		// TODO Auto-generated method stub
		return null;
	}

}
