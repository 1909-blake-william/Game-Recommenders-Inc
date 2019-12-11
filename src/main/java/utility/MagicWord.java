package utility;

public final class MagicWord {
	
	/*
	 * have magic words to:
	 * register user
	 * login
	 * register game
	 * get games based on owned console and genre
	 */ 
	
	// UserDaoImpl MagicWords
	public static final String LOGIN_QUERY = "SELECT user_id, username FROM user_table WHERE username = ? AND password = ?";
	public static final String REGISTER_QUERY = "INSERT INTO user_table (user_id, username, password) " +
												"VALUES (user_id_seq.nextval, ?, ?)";
	
	// ObjectMapper Header
	public static final String CONTENT_TYPE = "application/json";
	
	
	//VideoGameDaoImplMagicWords
	public static final String INSERT_QUERY = "INSERT INTO video_games (game_id, game_name, user_id, platform_id, genre_id, preference_id) " +
												"VALUES (?, ?, ?, ?, ?, ?)";
	public static final String SELECT_QUERY = "i";
}
