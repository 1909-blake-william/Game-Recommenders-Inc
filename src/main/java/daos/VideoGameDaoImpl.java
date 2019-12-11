package daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import models.VideoGame;
import utility.ConnectionUtil;
import utility.Exceptions;
import utility.MagicWord;

public class VideoGameDaoImpl implements VideoGameDao {

	@Override
	public void addVideoGame(int game_id, String game_name, int user_id, int platform_id, int genre_id,
			int preference_id) {
		try (Connection c = ConnectionUtil.getConnection()) {
			PreparedStatement stmt = c.prepareCall(MagicWord.INSERT_QUERY);
			stmt.setInt(1, game_id);
			stmt.setString(2, game_name);
			stmt.setInt(3, user_id);
			stmt.setInt(4, platform_id);
			stmt.setInt(5, genre_id);
			stmt.setInt(6, preference_id);
			stmt.executeQuery();
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
	
	

}
