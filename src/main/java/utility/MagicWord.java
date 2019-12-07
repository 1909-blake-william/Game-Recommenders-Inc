package utility;

public class MagicWord {
	
	/*
	 * have magic words to:
	 * register user
	 * login
	 * register game
	 * get games based on owned console and genre
	 */ 
	
	public static final String LOGIN_QUERY = "SELECT user_id, username FROM user_table WHERE username = ? AND password = ?";
	public static final String REGISTER_QUERY = "INSERT INTO user_table (user_id, username, password) " +
												"VALUES (user_id_seq.nextval, ?, ?)";
}
