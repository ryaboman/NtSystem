CREATE TABLE `pswd_recovery` (
                                 `id_pswd_recovery` int(11) NOT NULL AUTO_INCREMENT,
                                 `id_user` int(11) NOT NULL,
                                 `recovery_hash` varchar(45) NOT NULL,
                                 `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                 PRIMARY KEY (`id_pswd_recovery`),
                                 UNIQUE KEY `url_UNIQUE` (`recovery_hash`),
                                 UNIQUE KEY `id_pswd_recovery_UNIQUE` (`id_pswd_recovery`),
                                 UNIQUE KEY `id_user_UNIQUE` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;