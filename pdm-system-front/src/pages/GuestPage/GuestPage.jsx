import React from 'react';
import { Link } from 'react-router-dom';
import styles from './guest.module.css';

import nameLogo from '../../assets/images/RadioMind_black.png'
import proektor from '../../assets/images/proekt.png'
import logo from '../../assets/images/logo.png'

const GuestHomePage = () => {
  return (
    <div className={styles.container}>
      {/* Шапка сайта */}
      <header className={styles.header}>
        <Link to="/static" className={styles.logoWrapper}>
          <img 
            src={logo}
            alt="Logo"
            height={100}
          />
          <img 
            src={nameLogo}
            alt="NameLogo"
            width={300}
          />
        </Link>
        
        <p className={styles.strap}>Автоматизированная система управления производственными данными об изделиях</p>
        <p className={styles.strap}>АСУ ПДоИ</p>
        
        <nav className={styles.menu}>
          <Link to="/" className={styles.menuLink}>
            Главная
          </Link>
          <Link to="/history" className={styles.menuLink}>
            История
          </Link>
        </nav>
      </header>

      {/* Основное содержимое */}
      <main className={styles.content}>
        <section className={styles.imgMis}>
          <img 
            src={proektor}
            alt="Кульман" 
          />
          
          <div>
            <u>Назначение</u>
          </div>
          
          <div className={styles.textMis}>
            Добро пожаловать в систему управления производственными данными.
            Сервис предназначен для управления
            конструкторской документации
          </div>
        </section>

        <section className={styles.imp}>
          <div className={styles.headline}>
            С чего начать:
          </div>
          
          <ul className={styles.hhyp}>
            <li className={styles.navItem}>
              <Link to="/login" className={styles.navLink}>
                Регистрация и авторизация
              </Link>
            </li>
            <li className={styles.navItem}>
              <a 
                href="/dokuwiki/doku.php?id=помощь:содержание"
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                Инструкции по работе на dep3630
              </a>
            </li>
          </ul>
        </section>
      </main>

      {/* Подвал сайта */}
      <footer className={styles.footer}>
        <div className={styles.logoFooter}>
          <Link to="/static" className={styles.logoWrapper}>
            <img 
              src={nameLogo} 
              alt="Scone O'Clock logo"
              width={300}
            />
          </Link>
        </div>

        <nav className={styles.menuFooter}>
          <Link to="/" className={styles.menuLink}>
            Главная
          </Link>
          <Link to="/history" className={styles.menuLink}>
            История
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default GuestHomePage;