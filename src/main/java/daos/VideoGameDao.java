package daos;

import models.VideoGame;

public interface VideoGameDao {
		
	void addVideoGame(int game_id, String game_name, int user_id, int platform_id, int genre_id, int preference_id);
		
	void findVideoGameDBbyId(int user_id);
	
	VideoGame[] gameRecom(int platform_id, int genre_id, int user_id);

	void findVideoGameDB(int videogame_id, int user_id);

}
