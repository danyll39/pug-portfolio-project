CREATE DATABASE drinks;

CREATE USER'data'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Dr1nks!';

GRANT ALL ON drinks.*TO'data'@'localhost';

USE drinks;

CREATE TABLE data (
id INT auto_increment,
name  VARCHAR(255),
alcohol VARCHAR(255),
mixer VARCHAR(255),
abv INT,
garnish VARCHAR(255),

createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
deletedAt DATETIME,
PRIMARY KEY(id)
);
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Cape Cod', 'Vodka', 'craberry', 14%, 'lime'); 
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Greyhound', 'Vodka', 'grapefruit', 7%, 'lime');
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Summer Collins', 'Vodka', 'lemonade', 7%, 'lemon');
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Screw Driver', 'Vodka', 'orange juice', 11.4%, 'orange slice');
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Vodka Tonic', 'Vodka', 'tonic', 5%, 'lemon');
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Salty Dog', 'Vodka', 'grapefruit', 12%, 'grapefruit');
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Cubre Libre', 'Rum', 'coke', 4.7%, 'lime');
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Dark and Stormy', 'Rum', 'ginger beer', 17%, 'lime');
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('50/50', 'Gin', 'dry vermouth', 4.2%, 'olive');
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Gin and Tonic', 'Gin', 'tonic', 14%, 'lime');
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Gin and Tea', 'Gin', 'tonic', 14%, 'orange');
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Roses Gimlet', 'Gin', 'lime juice', 11%, 'lime');
INSERT INTO data( name,alcohol, mixer, abv, garnish) VALUES ('Scotch and Soda', 'Scotch', 'soda', 11%, 'lemon');

