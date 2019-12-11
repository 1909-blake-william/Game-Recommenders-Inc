package daos;

import org.junit.Test;

public class VideoGameDaoTest {
	
	private VideoGameDao videoGameDao = VideoGameDaoImpl.getInstance();
	
	@Test
	public void addGameTest() {
		int successful = videoGameDao.addVideoGame(4828, "Borderlands", 1, 4, 2, 4);
		assert (successful != 0); // If zero, it was not added, only good for one test
	}
}
