package daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import utility.ConnectionUtil;
import utility.Exceptions;
import utility.MagicWord;

import models.User;

public class UserDaoImpl implements UserDao {

	private static UserDao instance = new UserDaoImpl();

	private UserDaoImpl() {
	}

	private User extractUser(ResultSet rs) throws SQLException {
		return new User(rs.getInt("user_id"), rs.getString("username"));
	}

	@Override
	public User login(String username, String password) {
		try (Connection c = ConnectionUtil.getConnection()) {
			PreparedStatement stmt = c.prepareCall(MagicWord.LOGIN_QUERY);
			stmt.setString(1, username);
			stmt.setString(2, password);
			ResultSet rs = stmt.executeQuery();
			if (rs.next()) {
				return extractUser(rs);
			}
		} catch (SQLException e) {
			Exceptions.logSQLException(e);
		}
		return null;
	}

	@Override
	public int register(String username, String password) {
		try (Connection c = ConnectionUtil.getConnection()) {
			PreparedStatement stmt = c.prepareCall(MagicWord.REGISTER_QUERY);
			stmt.setString(1, username);
			stmt.setString(2, password);
			int save = stmt.executeUpdate();
			return save;
		} catch (SQLException e) {
			Exceptions.logSQLException(e);
		}
		return 0;

	}

	public static UserDao getInstance() {
		return instance;
	}

	
}
