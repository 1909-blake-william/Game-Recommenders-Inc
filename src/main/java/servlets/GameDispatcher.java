package servlets;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import daos.VideoGameDao;
import daos.VideoGameDaoImpl;
import models.VideoGame;
import utility.JsonReader;

public class GameDispatcher implements Dispatcher{

	private VideoGameDao videoGameDao = VideoGameDaoImpl.getInstance();
	
	@Override
	public boolean isSupported(HttpServletRequest request) {
		return request.getMethod().equals("POST") && request.getRequestURI().equals("/GameRecommender/add-game");
	}

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		try {
			VideoGame videoGame = (VideoGame) JsonReader.read(request.getInputStream(), VideoGame.class);
			if (request.getRequestURI().equals("/GameRecommender/add-game")) {
				videoGameDao.addVideoGame(videoGame.getGame_id(), videoGame.getGame_name(), videoGame.getUser_id(), videoGame.getPlatform_id(), videoGame.getGenre_id(), 4);
			}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
