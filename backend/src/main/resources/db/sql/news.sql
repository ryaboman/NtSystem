CREATE TABLE `news` (
  `new_id` int(11) NOT NULL AUTO_INCREMENT,
  `new_title` varchar(100) NOT NULL,
  `new_cover` varchar(100) DEFAULT NULL,
  `new_text` varchar(500) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`new_id`),
  UNIQUE KEY `new_id_UNIQUE` (`new_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;