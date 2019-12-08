CREATE SEQUENCE user_id_seq;
CREATE TABLE user_table (
    user_id INT PRIMARY KEY NOT NULL,
    username VARCHAR2(20) UNIQUE NOT NULL,
    password VARCHAR2(20) NOT NULL
);

CREATE TABLE platforms (
    platform_id INT PRIMARY KEY NOT NULL,
    platform_name VARCHAR2(20) UNIQUE NOT NULL
);

CREATE TABLE genres (
    genre_id INT PRIMARY KEY NOT NULL,
    genre_name VARCHAR2(25) UNIQUE NOT NULL
);

CREATE TABLE preferences(
    preference_id INT PRIMARY KEY NOT NULL,
    preference_name VARCHAR(8) NOT NULL,
    owned_name VARCHAR(9) NOT NULL
);

CREATE TABLE video_games ( -- joined table, houses all info
    game_id INT NOT NULL,
    game_name VARCHAR2(100) NOT NULL,
    user_id INT REFERENCES user_table(user_id) NOT NULL,
    platform_id INT REFERENCES platforms(platform_id) NOT NULL,
    genre_id INT REFERENCES genres(genre_id) NOT NULL,
    preference_id INT REFERENCES preferences(preference_id) NOT NULL,
    CONSTRAINT video_game_pk PRIMARY KEY(game_id, user_id, platform_id)
);
--------------------------------------------------------------------------------------------------------------------------------
--Populating preferences table values
--------------------------------------------------------------------------------------------------------------------------------

INSERT INTO preferences(preference_id, preference_name, owned_name)
    VALUES (1, 'N/A', 'Not owned');
    
INSERT INTO preferences(preference_id, preference_name, owned_name)
    VALUES (2, 'Liked', 'Not owned');
    
INSERT INTO preferences(preference_id, preference_name, owned_name)
    VALUES (3, 'Disliked', 'Not owned');
    
INSERT INTO preferences(preference_id, preference_name, owned_name)
    VALUES (4, 'N/A', 'Owned');
    
INSERT INTO preferences(preference_id, preference_name, owned_name)
    VALUES (5, 'Liked', 'Owned');
    
INSERT INTO preferences(preference_id, preference_name, owned_name)
    VALUES (6, 'Disliked', 'Owned');

--------------------------------------------------------------------------------------------------------------------------------
--Creating a test user
--------------------------------------------------------------------------------------------------------------------------------
INSERT INTO user_table (user_id, username, password)
    VALUES (user_id_seq.nextval, 'admin', 'password');

commit;