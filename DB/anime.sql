-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema animedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `animedb` ;

-- -----------------------------------------------------
-- Schema animedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `animedb` DEFAULT CHARACTER SET utf8 ;
USE `animedb` ;

-- -----------------------------------------------------
-- Table `anime`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `anime` ;

CREATE TABLE IF NOT EXISTS `anime` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(200) NOT NULL,
  `description` VARCHAR(5000) NULL,
  `image_url` VARCHAR(250) NULL,
  `aired` DATE NULL,
  `seasons` INT NULL,
  `episodes` INT NULL,
  `trailer_url` VARCHAR(250) NULL,
  `soundtrack_url` VARCHAR(250) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS animeuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'animeuser'@'localhost' IDENTIFIED BY 'animeuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'animeuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `anime`
-- -----------------------------------------------------
START TRANSACTION;
USE `animedb`;
INSERT INTO `anime` (`id`, `title`, `description`, `image_url`, `aired`, `seasons`, `episodes`, `trailer_url`, `soundtrack_url`) VALUES (1, 'Maidsama', 'Being the first female student council president isn\'t easy, especially when your school just transitioned from an all boys high school to a co-ed one. Aptly nicknamed \"Demon President\" by the boys for her strict disciplinary style, Misaki Ayuzawa is not afraid to use her mastery of Aikido techniques to cast judgment onto the hordes of misbehaving boys and defend the girls at Seika High School.\n\nYet even the perfect Ayuzawa has an embarrassing secret—she works part-time as a maid at a maid café to help her struggling family pay the bills. She has managed to keep her job hidden from her fellow students and maintained her flawless image as a stellar student until one day, Takumi Usui, the most popular boy in school, walks into the maid café. He could destroy her reputation with her secret... or he could twist the student council president around his little finger and use her secret as an opportunity to get closer to her.', 'https://cdn.myanimelist.net/images/anime/6/25254.jpg', '2010-04-02', 1, 26, '<iframe src=\"https://open.spotify.com/embed/track/2h9Pbowa85GYBxWiUZWoH4?utm_source=generator\" width=\"100%\" height=\"380\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>', '<iframe src=\"https://open.spotify.com/embed/track/2h9Pbowa85GYBxWiUZWoH4?utm_source=generator\" width=\"100%\" height=\"380\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>');
INSERT INTO `anime` (`id`, `title`, `description`, `image_url`, `aired`, `seasons`, `episodes`, `trailer_url`, `soundtrack_url`) VALUES (2, 'Cowboy Bebop', 'In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys.\" The ragtag team aboard the spaceship Bebop are two such individuals.\n\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member\'s dark and mysterious past little by little.', 'https://cdn.myanimelist.net/images/anime/4/19644.jpg', '1998-04-03', 1, 26, '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RI08P5SaJNU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', '<iframe src=\"https://open.spotify.com/embed/track/2Wi5ubKr8zSk8L3CLemyS4?utm_source=generator\" width=\"100%\" height=\"380\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>');
INSERT INTO `anime` (`id`, `title`, `description`, `image_url`, `aired`, `seasons`, `episodes`, `trailer_url`, `soundtrack_url`) VALUES (3, 'Soul Eater', 'Death City is home to the famous Death Weapon Meister Academy, a technical academy headed by the Shinigami—Lord Death himself. Its mission: to raise \"Death Scythes\" for the Shinigami to wield against the many evils of their fantastical world. These Death Scythes, however, are not made from physical weapons; rather, they are born from human hybrids who have the ability to transform their bodies into Demon Weapons, and only after they have consumed the souls of 99 evil beings and one witch\'s soul.\n\nSoul Eater Evans, a Demon Scythe who only seems to care about what\'s cool, aims to become a Death Scythe with the help of his straight-laced wielder, or meister, Maka Albarn. The contrasting duo work and study alongside the hot headed Black☆Star and his caring weapon Tsubaki, as well as the Shinigami\'s own son, Death the Kid, an obsessive-compulsive dual wielder of twin pistols Patty and Liz.\n\nSoul Eater follows these students of Shibusen as they take on missions to collect souls and protect the city from the world\'s threats while working together under the snickering sun to become sounder in mind, body, and soul.', 'https://cdn.myanimelist.net/images/anime/9/7804.jpg', '2008-04-07', 2, 51, '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Xc66xvYCCbs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', '<iframe src=\"https://open.spotify.com/embed/track/37Ajdq9CqvSVqiCX6PZ2ap?utm_source=generator\" width=\"100%\" height=\"380\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>');
INSERT INTO `anime` (`id`, `title`, `description`, `image_url`, `aired`, `seasons`, `episodes`, `trailer_url`, `soundtrack_url`) VALUES (4, 'Attack On Titan', 'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.\n\nAfter witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Based on Hajime Isayama\'s award-winning manga, Shingeki no Kyojin follows Eren, along with his adopted sister Mikasa Ackerman and his childhood friend Armin Arlert, as they join the brutal war against the titans and race to discover a way of defeating them before the last walls are breached.', 'https://cdn.myanimelist.net/images/anime/10/47347.jpg', '2013-04-07', 3, 59, '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/bT9csxkth8g\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', '<iframe src=\"https://open.spotify.com/embed/track/0b7b3OR4cKHo08rdpLHofM?utm_source=generator\" width=\"100%\" height=\"380\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>');

COMMIT;

