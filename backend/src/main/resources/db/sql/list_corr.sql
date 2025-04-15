CREATE TABLE `list_corr` (
                             `id_list` int(11) NOT NULL AUTO_INCREMENT,
                             `id_ntf` int(11) NOT NULL,
                             `mark_doc` varchar(50) NOT NULL COMMENT 'ÐžÐ±Ð¾Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð¸Ñ€ÑƒÐµÐ¼Ð¾Ð³Ð¾ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð°',
                             `log` int(11) DEFAULT NULL COMMENT 'Ð£ÐºÐ°Ð·Ð°Ð½Ð¸Ðµ Ð¾ Ð·Ð°Ð´ÐµÐ»Ðµ',
                             `introduction` varchar(100) DEFAULT NULL COMMENT 'Ð£ÐºÐ°Ð·Ð°Ð½Ð¸Ðµ Ð¾ Ð²Ð½ÐµÐ´Ñ€ÐµÐ½Ð¸Ð¸',
                             PRIMARY KEY (`id_list`,`id_ntf`),
                             UNIQUE KEY `id_list_UNIQUE` (`id_list`),
                             KEY `_idx` (`id_ntf`),
                             CONSTRAINT `notification_key` FOREIGN KEY (`id_ntf`) REFERENCES `notification` (`id_ntf`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Ð¢Ð°Ð±Ð»Ð¸Ñ†Ð° - ÑÐ¿Ð¸ÑÐ¾Ðº Ð