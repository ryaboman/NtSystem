CREATE TABLE `drawing` (
                           `drawing_id` int(11) NOT NULL AUTO_INCREMENT,
                           `drawing_mark` varchar(45) NOT NULL,
                           `drawing_name` varchar(100) NOT NULL,
                           `comment` varchar(500) DEFAULT NULL,
                           `user_id` varchar(45) NOT NULL,
                           `drawing_path_to_file` varchar(90) NOT NULL,
                           `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                           `drawing_mark_db` varchar(45) DEFAULT NULL,
                           PRIMARY KEY (`drawing_id`),
                           UNIQUE KEY `id_drawing_UNIQUE` (`drawing_id`),
                           UNIQUE KEY `darwing_mark_UNIQUE` (`drawing_mark`),
                           UNIQUE KEY `drawing_mark_db_UNIQUE` (`drawing_mark_db`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='Ð¢Ð°Ð±ÑˆÐ¸Ñ†Ð° Ð´Ð»Ñ Ñ…Ñ€Ð°Ð½Ð'