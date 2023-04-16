CREATE DATABASE movie_booking;

USE movie_booking;

-- create films table
CREATE TABLE films(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL UNIQUE,
length_min INT NOT NULL
);

-- customer table
CREATE TABLE customers (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30) NOT NULL,
email VARCHAR(30)NOT NULL
);