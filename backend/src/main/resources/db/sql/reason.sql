CREATE TABLE `reason` (
                          `id_reason` int(11) NOT NULL AUTO_INCREMENT,
                          `code_reason` int(11) NOT NULL,
                          `name` varchar(90) NOT NULL,
                          `value` int(11) NOT NULL COMMENT 'Ð—Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ Ð² ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²Ð¸Ð¸ Ñ html',
                          `comment` varchar(45) DEFAULT NULL,
                          PRIMARY KEY (`id_reason`),
                          UNIQUE KEY `value_UNIQUE` (`value`),
                          UNIQUE KEY `id_reason_UNIQUE` (`id_reason`),
                          UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COMMENT='Ð¡Ñ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ñ‹Ðµ Ð¿Ñ€Ð¸Ñ‡Ð¸Ð½Ñ‹ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ†Ð¸Ð¸';