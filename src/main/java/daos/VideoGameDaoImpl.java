package daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import models.VideoGame;
import utility.ConnectionUtil;
import utility.Exceptions;
import utility.MagicWord;

public class VideoGameDaoImpl implements VideoGameDao {
	private final Logger logger = LogManager.getLogger(getClass());
	private static VideoGameDao instance = new VideoGameDaoImpl();

	private VideoGameDaoImpl() {
	}

	
	@Override
	public void addVideoGame(int game_id, String game_name, int user_id, int platform_id, int genre_id,
			int preference_id) {
		logger.info("Attempting to add parameters: {}, {}, {}, {}, {}, {}", game_id, game_name, user_id, platform_id, genre_id, preference_id);
		try (Connection c = ConnectionUtil.getConnection()) {
			PreparedStatement stmt = c.prepareCall(MagicWord.INSERT_QUERY);
			stmt.setInt(1, game_id);
			stmt.setString(2, game_name);
			stmt.setInt(3, user_id);
			stmt.setInt(4, platform_id);
			stmt.setInt(5, genre_id);
			stmt.setInt(6, preference_id);
			stmt.executeUpdate();
		} catch (SQLException e) {
			Exceptions.logSQLException(e);
		}
		return;
		
	}

	@Override
	public void findVideoGameDBbyId(int user_id) {
	}

	@Override
	public void findVideoGameDB(int videogame_id, int user_id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public VideoGame[] gameRecom(int platform_id, int genre_id, int user_id) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public static VideoGameDao getInstance() {
		return instance;
	}

}
