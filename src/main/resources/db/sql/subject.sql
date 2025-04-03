CREATE TABLE `subject` (
                           `id_subject` int(11) NOT NULL AUTO_INCREMENT,
                           `mark_subject` varchar(45) NOT NULL COMMENT 'ÐžÐ±Ð¾Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ Ñ‚ÐµÐ¼Ñ‹',
                           `name_subject` varchar(45) NOT NULL COMMENT 'ÐÐ°Ð¸Ð¼ÐµÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ Ñ‚ÐµÐ¼Ñ‹',
                           `manager_subject` varchar(45) DEFAULT NULL COMMENT 'Ð ÑƒÐºÐ¾Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÑŒ Ñ‚ÐµÐ¼Ñ‹',
                           `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÐµÐµ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ Ñ‚ÐµÐ¼Ñ‹',
                           PRIMARY KEY (`id_subject`),
                           UNIQUE KEY `id_subject_UNIQUE` (`id_subject`),
                           UNIQUE KEY `name_subject_UNIQUE` (`name_subject`),
                           UNIQUE KEY `mark_subject_UNIQUE` (`mark_subject`),
                           KEY `id_subject_IXD` (`id_subject`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Ð¢ÐµÐ¼Ð° Ñ€Ð°Ð±Ð¾Ñ‚. Ð¢ÐµÐ¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ°Ñ ÐºÐ°Ñ€Ñ‚Ð¾Ñ‡Ðº