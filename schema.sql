DROP DATABASE IF EXISTS heroku_aa9603bdcb7e15e;

CREATE DATABASE heroku_aa9603bdcb7e15e;

USE heroku_aa9603bdcb7e15e;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  userid varchar(255) NOT NULL,
  name varchar(255),
  email varchar(255),
  PRIMARY KEY (id)
);


CREATE TABLE CCcategories (
  id in NOT NULL AUTO_INCREMENT,
  CCcategoryname varchar(255) NOT NULL,
  cashbackpercent number (255)
  CCtypeid int (255)
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
