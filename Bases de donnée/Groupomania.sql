# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Hôte: 127.0.0.1 (MySQL 5.7.31)
# Base de données: Groupomania
# Temps de génération: 2020-11-04 19:54:01 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Affichage de la table Post
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Post`;

CREATE TABLE `Post` (
  `postID` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `userID` smallint(5) unsigned DEFAULT NULL,
  `legend` varchar(180) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gifUrl` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postIDComment` mediumint(8) unsigned DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci,
  `dateCreation` datetime NOT NULL,
  PRIMARY KEY (`postID`),
  KEY `fk_post_userID` (`userID`),
  KEY `fk_commentID` (`postIDComment`),
  CONSTRAINT `fk_commentID` FOREIGN KEY (`postIDComment`) REFERENCES `Post` (`postID`) ON DELETE CASCADE,
  CONSTRAINT `fk_post_userID` FOREIGN KEY (`userID`) REFERENCES `User` (`userID`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `Post` WRITE;
/*!40000 ALTER TABLE `Post` DISABLE KEYS */;

INSERT INTO `Post` (`postID`, `userID`, `legend`, `gifUrl`, `postIDComment`, `body`, `dateCreation`)
VALUES
	(13,3,'Bonjour à tous, voici mon premier post','http://localhost:3000/images/gifanimé_1603388912073_1603880508908.gif',NULL,NULL,'2020-10-28 11:21:48'),
	(14,4,NULL,NULL,13,'Bonjour Thierry, voici ma réponse a ce post.','2020-10-28 11:49:40'),
	(15,4,'Bonjour, je crée mon premier post avec un gif','http://localhost:3000/images/diablotin01_1603389087198_1603882230574.gif',NULL,NULL,'2020-10-28 11:50:30'),
	(16,3,NULL,NULL,15,'Bonjour Audrey je répond a ton post :-)','2020-10-28 11:52:37'),
	(17,3,'Test vidéo','http://localhost:3000/images/filmcrocro_1603892994980.mp4',NULL,NULL,'2020-10-28 14:49:55'),
	(19,3,'Insertion d\'une image en jpg','http://localhost:3000/images/paysage_1603899334216.jpg',NULL,NULL,'2020-10-28 16:35:34'),
	(20,4,NULL,NULL,19,'Magnifique photo !!!','2020-10-28 17:23:41');

/*!40000 ALTER TABLE `Post` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table Reaction
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Reaction`;

CREATE TABLE `Reaction` (
  `userID` smallint(5) unsigned NOT NULL,
  `postID` mediumint(8) unsigned NOT NULL,
  `reaction` tinyint(4) DEFAULT NULL,
  `dateCreation` datetime NOT NULL,
  PRIMARY KEY (`userID`,`postID`),
  KEY `fk_postID` (`postID`),
  CONSTRAINT `fk_postID` FOREIGN KEY (`postID`) REFERENCES `Post` (`postID`) ON DELETE CASCADE,
  CONSTRAINT `fk_reaction_userID` FOREIGN KEY (`userID`) REFERENCES `User` (`userID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `Reaction` WRITE;
/*!40000 ALTER TABLE `Reaction` DISABLE KEYS */;

INSERT INTO `Reaction` (`userID`, `postID`, `reaction`, `dateCreation`)
VALUES
	(3,15,1,'2020-11-03 14:45:38'),
	(4,13,1,'2020-10-28 11:49:19'),
	(4,17,-1,'2020-11-03 15:13:32'),
	(4,19,1,'2020-10-28 17:23:43');

/*!40000 ALTER TABLE `Reaction` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table User
# ------------------------------------------------------------

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `userID` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pseudo` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatarUrl` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'http://localhost:3000/images/avatarDefault.jpg',
  `dateCreation` datetime NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `password` (`password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;

INSERT INTO `User` (`userID`, `email`, `firstName`, `lastName`, `pseudo`, `password`, `bio`, `avatarUrl`, `dateCreation`)
VALUES
	(3,'thierrylaval@groupomania.com','Thierry','Laval','Tiri','$2b$10$GYPVH0lJCCo41Y5kcGJg3eHoY46VNdQ8y7oeZDpmhFsJEdbbN9GYm','Voici ma bio','http://localhost:3000/images/Tiri_1603388736567_1603880393174.jpg','2020-10-28 11:19:01'),
	(4,'audrey@groupomania.com','Audrey','Renvoisé','Oley','$2b$10$E80YESVNVa.MKq8BfldF6Of/9Tx6wudopVFkm9LK6YiN64m3Q5bjq','Ma bio de test: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\"','http://localhost:3000/images/images_1603882132894.jpg','2020-10-28 11:48:31');

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
