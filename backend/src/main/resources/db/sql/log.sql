CREATE TABLE `log` (
                       `id_log` int(11) NOT NULL AUTO_INCREMENT,
                       `name_log` varchar(45) NOT NULL,
                       `value` int(11) NOT NULL,
                       `comment` varchar(45) DEFAULT NULL,
                       PRIMARY KEY (`id_log`),
                       UNIQUE KEY `id_log_UNIQUE` (`id_log`),
                       UNIQUE KEY `name_log_UNIQUE` (`name_log`),
                       UNIQUE KEY `value_UNIQUE` (`value`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;