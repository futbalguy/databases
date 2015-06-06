CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE messages (
  /* Describe your table here.*/

  messageid INTEGER NOT NULL AUTO_INCREMENT,
  message VARCHAR(200),
  roomid INTEGER,
  userid INTEGER,
  dateCreated DATETIME,
  PRIMARY KEY (messageid)

);

CREATE TABLE rooms (
  roomid INTEGER NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(50),
  roomDescription VARCHAR(200),
  PRIMARY KEY (roomid)
);

CREATE TABLE users (
  userid INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(200),
  PRIMARY KEY (userid)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

