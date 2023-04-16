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

-- rooms table
CREATE TABLE rooms (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
no_seats INT NOT NULL
);

-- screenings w/ FKs and DATETIME
CREATE TABLE screenings (
id INT PRIMARY KEY AUTO_INCREMENT,
film_id INT NOT NULL,
FOREIGN KEY (film_id) REFERENCES films(id),
room_id INT NOT NULL,
FOREIGN KEY (room_id) REFERENCES rooms(id),
start_time DATETIME NOT NULL
);


-- seats table FK for room_id
CREATE TABLE seats (
id INT PRIMARY KEY AUTO_INCREMENT,
row CHAR(1) NOT NULL,
number INT NOT NULL,
room_id INT NOT NULL,
FOREIGN KEY (room_id) REFERENCES rooms(id)
);

-- bookings junction table many to many
-- screenings can only be associated with one book
--  bookings can only be associated with one customer

-- bookins table
CREATE TABLE bookings (
id INT PRIMARY KEY AUTO_INCREMENT,
customer_id INT NOT NULL,
FOREIGN KEY (customer_id) REFERENCES customers(id),
screening_id INT NOT NULL,
FOREIGN KEY (screening_id) REFERENCES screenings(id)
);

-- can get customer info through fks
CREATE TABLE reserved_seating (
id INT PRIMARY KEY AUTO_INCREMENT,
booking_id INT NOT NULL,
FOREIGN KEY(booking_id) REFERENCES bookings(id),
seat_id INT NOT NULL,
FOREIGN KEY (seat_id) REFERENCES seats(id)
);