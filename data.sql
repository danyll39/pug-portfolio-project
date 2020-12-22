CREATE DATABASE drinks;

CREATE USER'data'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Dr1nks!';

GRANT ALL ON drinks.*TO'data'@'localhost';

USE drinks;

CREATE TABLE drinks (
id INT auto_increment,
name  VARCHAR(255),
alcohol VARCHAR(255),
mixer VARCHAR(255),
abv INT,
garnish VARCHAR(255),
directionId INT,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
deletedAt DATETIME,
PRIMARY KEY(id),
FOREIGN KEY(directionId) REFERENCES directions(id)
);


CREATE TABLE directions (
  id INT auto_increment,
  directions VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);





INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Cape cod', 'Vodka', 'cranberry', 14, 'lime', 1 );
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Gin and Tonic', 'Gin', 'tonic', 14, 'lime', 2);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Greyhound', 'Vodka', 'grapefruit', 10, 'lime', 3);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Summer Collins', 'Vodka', 'lemonade', 7, 'lemon', 4);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Screw Driver', 'Vodka', 'orange juice', 11, 'orange slice', 5);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Vodka Tonic', 'Vodka', 'tonic', 6, 'lime', 6);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Salty Dog', 'Vodka', 'grapefruit', 12, 'grapefruit', 7);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Cubre Libre', 'Rum', 'coke', 4.7, 'lime', 8);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Dark and Stormy', 'Rum', 'ginger beer', 17, 'lime', 9);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('50/50', 'Gin', 'dry vermouth', 4.2, 'olive', 10);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Gin and Tea', 'Gin', 'tea', 14, 'lime', 11);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Roses Gimlet', 'Gin', 'lime juice', 11, 'lime', 12);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Scotch and Soda', 'Scotch', 'soda water', 12, 'lime', 13);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Scotch and Cola', 'Scotch', 'cola', 12, 'lime', 14);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Presbyterian', 'Scotch', 'ginger ale', 11, 'lemon twist', 15);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Mimosa', 'champagne', 'orange juice', 11, 'fruit', 16);
INSERT INTO drinks( name, alcohol, mixer, abv, garnish, directionId) VALUES ('Cranberry Champagne Cocktail', 'Champagne', 'cranberry juice', 12,'lime', 17);


INSERT INTO directions (directions) VALUES ('Into an old fashioned glass over ice cubes, pour vodka and cranberry juice. Squeeze lime wedge into drink, and then drop the wedge into the drink. Serve.');
INSERT INTO directions (directions) VALUES ('In a highball glass filled with ice cubes, pour the gin, then top with tonic');
INSERT INTO directions (directions) VALUES ('Pour the vodka and grapefruit juice into a collins glass filled with ice cubes.');
INSERT INTO directions (directions) VALUES ('In a collins glass or even a highball glass, combine vodka and lemon juice. Add ice and stir together with a spoon. Top with soda water and garnish with a maraschino cherry and a lemon slice.');
INSERT INTO directions (directions) VALUES ('Fill a highball glass with ice cubes, add the vodka, add the orange juice. Stir and garnish with your fruit. Squeeze lime wedge(s) over the drink, drop wedge(s) into drink, and lightly stir.');
INSERT INTO directions (directions) VALUES ('Fill a highball glass with ice. Pour vodka in glass. Top with tonic water .');
INSERT INTO directions (directions) VALUES ('Pour coarse salt onto small plate. Moisten rims of 2 highball glasses. Gently dip rims into salt to coat lightly. Fill glasses with ice cubes. Pour 1/4 cup vodka over ice in each glass. Divide grapefruit juice between glasses and serve.');
INSERT INTO directions (directions) VALUES ('Add all the ingredients to a highball glass filled with ice.Garnish with a lime wedge.');
INSERT INTO directions (directions) VALUES ('Pour the rum over ice in highball and fill with ginger beer. Squeeze in the lime wedge.');
INSERT INTO directions (directions) VALUES ('Place in a martini shaker. DO NOT shake or it will explode! Mix with a spoon until mostly lump-free. Add 1 cup ice (ideally crushed). Stir until mixture is cold. Strain into a martini glass.');
INSERT INTO directions (directions) VALUES ('In an old-fashioned glass filled with ice, pour the gin and chilled tea. Add the lemon juice and sugar to taste.');
INSERT INTO directions (directions) VALUES ('Shake and strain into a martini or old-fashioned glass.');
INSERT INTO directions (directions) VALUES ('Pour the Scotch into a highball or old-fashioned glass filled with ice. Top with the club soda.');
INSERT INTO directions (directions) VALUES ('Build over ice in a Collins glass or an Old-fashioned glass.');
INSERT INTO directions (directions) VALUES ('Pour a shot of whiskey into a highball glass filled with ice. Fill with ginger ale. Stir and garnish with a lemon twist.');
INSERT INTO directions (directions) VALUES ('Fill 8 champagne flutes 1/2 full with chilled sparkling wine. Top with orange juice');
INSERT INTO directions (directions) VALUES ('In a chilled Champagne flute add cranberry juice and a squeeze of lime. Top off the glass with Champagne. Garnish with 3 or 4 cranberries.');
