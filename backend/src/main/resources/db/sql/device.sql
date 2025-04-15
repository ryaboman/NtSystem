CREATE TABLE `device` (
                          `id_device` int(11) NOT NULL AUTO_INCREMENT,
                          `mark_device` varchar(45) NOT NULL,
                          `name_device` varchar(45) NOT NULL,
                          `id_subject` int(11) DEFAULT NULL,
                          `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                          PRIMARY KEY (`id_device`),
                          UNIQUE KEY `id_device_UNIQUE` (`id_device`),
                          UNIQUE KEY `mark_device_UNIQUE` (`mark_device`),
                          KEY `name_idx` (`name_device`),
                          KEY `mark_idx` (`mark_device`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;