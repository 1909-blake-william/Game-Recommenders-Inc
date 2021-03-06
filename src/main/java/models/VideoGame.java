package models;

public class VideoGame {
	int game_id;
	String game_name;
	int user_id;
	int platform_id;
	String platform_name;
	int genre_id;
	String genre_name;
	int preference_id;
	public VideoGame() {
		super();
		// TODO Auto-generated constructor stub
	}
	public VideoGame(int game_id, String game_name, int user_id, int platform_id, String platform_name, int genre_id,
			String genre_name, int preference_id) {
		super();
		this.game_id = game_id;
		this.game_name = game_name;
		this.user_id = user_id;
		this.platform_id = platform_id;
		this.platform_name = platform_name;
		this.genre_id = genre_id;
		this.genre_name = genre_name;
		this.preference_id = preference_id;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + game_id;
		result = prime * result + ((game_name == null) ? 0 : game_name.hashCode());
		result = prime * result + genre_id;
		result = prime * result + ((genre_name == null) ? 0 : genre_name.hashCode());
		result = prime * result + platform_id;
		result = prime * result + ((platform_name == null) ? 0 : platform_name.hashCode());
		result = prime * result + preference_id;
		result = prime * result + user_id;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		VideoGame other = (VideoGame) obj;
		if (game_id != other.game_id)
			return false;
		if (game_name == null) {
			if (other.game_name != null)
				return false;
		} else if (!game_name.equals(other.game_name))
			return false;
		if (genre_id != other.genre_id)
			return false;
		if (genre_name == null) {
			if (other.genre_name != null)
				return false;
		} else if (!genre_name.equals(other.genre_name))
			return false;
		if (platform_id != other.platform_id)
			return false;
		if (platform_name == null) {
			if (other.platform_name != null)
				return false;
		} else if (!platform_name.equals(other.platform_name))
			return false;
		if (preference_id != other.preference_id)
			return false;
		if (user_id != other.user_id)
			return false;
		return true;
	}
	public int getGame_id() {
		return game_id;
	}
	public void setGame_id(int game_id) {
		this.game_id = game_id;
	}
	public String getGame_name() {
		return game_name;
	}
	public void setGame_name(String game_name) {
		this.game_name = game_name;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getPlatform_id() {
		return platform_id;
	}
	public void setPlatform_id(int platform_id) {
		this.platform_id = platform_id;
	}
	public String getPlatform_name() {
		return platform_name;
	}
	public void setPlatform_name(String platform_name) {
		this.platform_name = platform_name;
	}
	public int getGenre_id() {
		return genre_id;
	}
	public void setGenre_id(int genre_id) {
		this.genre_id = genre_id;
	}
	public String getGenre_name() {
		return genre_name;
	}
	public void setGenre_name(String genre_name) {
		this.genre_name = genre_name;
	}
	public int getPreference_id() {
		return preference_id;
	}
	public void setPreference_id(int preference_id) {
		this.preference_id = preference_id;
	}
	@Override
	public String toString() {
		return "VideoGame [game_id=" + game_id + ", game_name=" + game_name + ", user_id=" + user_id + ", platform_id="
				+ platform_id + ", platform_name=" + platform_name + ", genre_id=" + genre_id + ", genre_name="
				+ genre_name + ", preference_id=" + preference_id + "]";
	}

}
