CREATE DATABASE drinks;

CREATE USER'data'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Dr1nks!';

GRANT ALL ON drinks.*TO'data'@'localhost';

USE drinks;

CREATE TABLE alcohols (
  id INT auto_increment,
  name  VARCHAR(255),
  alcohol VARCHAR(255),
  abv INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);
CREATE TABLE drinks (
id INT auto_increment,
name  VARCHAR(255),
directions VARCHAR(255) NOT NULL,
mixer VARCHAR(255),
garnish VARCHAR(255),
alcoholId INT,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
deletedAt DATETIME,
PRIMARY KEY(id),
FOREIGN KEY(alcoholId) REFERENCES alcohols(id)
);

INSERT INTO alcohols (name, abv) VALUES ('Champagne', 12);
INSERT INTO alcohols (name, abv) VALUES ('Gin', 37);
INSERT INTO alcohols (name, abv) VALUES ('Rum', 40);
INSERT INTO alcohols (name, abv) VALUES ('Scotch', 40);
INSERT INTO alcohols (name, abv) VALUES ('Vodka', 40);

INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Cape cod', 'Into an old fashioned glass over ice cubes, pour vodka and cranberry juice. Squeeze lime wedge into drink, and then drop the wedge into the drink. Serve.',  'cranberry',  'lime', 5 );
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Gin and Tonic', 'In a highball glass filled with ice cubes, pour the gin, then top with tonic', 'tonic', 'lime', 2);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Greyhound', 'Pour the vodka and grapefruit juice into a collins glass filled with ice cubes.', 'grapefruit', 'lime', 5);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Summer Collins', 'In a collins glass or even a highball glass, combine vodka and lemon juice. Add ice and stir together with a spoon. Top with soda water and garnish with a maraschino cherry and a lemon slice.', 'lemonade', 'lemon', 5);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Screw Driver', 'Fill a highball glass with ice cubes, add the vodka, add the orange juice. Stir and garnish with your fruit. Squeeze lime wedge(s) over the drink, drop wedge(s) into drink, and lightly stir.', 'orange juice', 'orange slice', 5);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Vodka Tonic', 'Fill a highball glass with ice. Pour vodka in glass. Top with tonic water .', 'tonic', 'lime', 3);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Salty Dog', 'Pour coarse salt onto small plate. Moisten rims of 2 highball glasses. Gently dip rims into salt to coat lightly. Fill glasses with ice cubes. Pour 1/4 cup vodka over ice in each glass. Divide grapefruit juice between glasses and serve.','grapefruit', 'grapefruit', 3);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Cubre Libre', 'Add all the ingredients to a highball glass filled with ice.Garnish with a lime wedge.', 'coke', 'lime', 3);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Dark and Stormy', 'Pour the rum over ice in highball and fill with ginger beer. Squeeze in the lime wedge.', 'ginger beer', 'lime', 3);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('50/50', 'Place in a martini shaker. DO NOT shake or it will explode! Mix with a spoon until mostly lump-free. Add 1 cup ice (ideally crushed). Stir until mixture is cold. Strain into a martini glass.', 'dry vermouth',  'olive', 2);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Gin and Tea', 'In an old-fashioned glass filled with ice, pour the gin and chilled tea. Add the lemon juice and sugar to taste.', 'tea',  'lime', 2);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Roses Gimlet', 'Shake and strain into a martini or old-fashioned glass.', 'lime juice',  'lime', 2);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Scotch and Soda', 'Pour the Scotch into a highball or old-fashioned glass filled with ice. Top with the club soda.', 'soda water',  'lime', 4);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Scotch and Cola', 'Build over ice in a Collins glass or an Old-fashioned glass.', 'cola',  'lime', 4);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Presbyterian', 'Pour a shot of whiskey into a highball glass filled with ice. Fill with ginger ale. Stir and garnish with a lemon twist.', 'ginger ale', 'lemon twist', 4);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Mimosa',  'Fill 8 champagne flutes 1/2 full with chilled sparkling wine. Top with orange juice', 'orange juice',  'fruit', 1);
INSERT INTO drinks( name, directions,  mixer, garnish, alcoholId) VALUES ('Cranberry Champagne Cocktail', 'In a chilled Champagne flute add cranberry juice and a squeeze of lime. Top off the glass with Champagne. Garnish with 3 or 4 cranberries.', 'cranberry juice', 'lime', 1);
