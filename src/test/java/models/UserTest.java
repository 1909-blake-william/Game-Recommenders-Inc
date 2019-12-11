package models;

import org.junit.Test;

import models.User;

public class UserTest {
	
	@Test
	public void createUser() {
		User u = new User(1, "Bob");
		assert u.getId() == 1 && u.getUsername().contentEquals("Bob");
	}
}
