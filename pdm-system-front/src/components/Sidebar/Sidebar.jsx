import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/', label: 'Главная' },
    { path: '/profile', label: 'Профиль' },
    { path: '/devices', label: 'Изделия' },
    { path: '/documents', label: 'Документы' },
    { path: '/notifications', label: 'Извещения' },
    { path: '/directories', label: 'Справочники' },
    { path: '/logout', label: 'Выход' },
  ];

  // Обновляем активный элемент при изменении маршрута
  useEffect(() => {
    setActiveItem(location.pathname);
    console.log('Active item updated:', location.pathname);
  }, [location.pathname]);

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeNavigation();
      }
    };

    if (isNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  const openNavigation = () => {
    console.log('Opening navigation');
    setIsNavOpen(true);
    document.body.classList.add('is-froze');
  };

  const closeNavigation = () => {
    console.log('Closing navigation');
    setIsNavOpen(false);
    document.body.classList.remove('is-froze');
  };

  const handleNavTriggerClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Nav trigger clicked, current state:', isNavOpen);
    
    if (isNavOpen) {
      closeNavigation();
    } else {
      openNavigation();
    }
  };

  const handleMenuItemClick = (item, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Menu item clicked:', item.path);
    
    // Обновляем активный элемент
    setActiveItem(item.path);
    
    // Для выхода - обычный переход
    if (item.path === '/logout') {
      console.log('Logout clicked, redirecting...');
      window.location.href = '/logout';
      return;
    }
    
    // Для внутренних страниц
    console.log('Navigating to:', item.path);
    closeNavigation();
    navigate(item.path);
  };

  // Функция для рендеринга метки элемента меню
  const renderLabel = (label) => {
    if (Array.isArray(label)) {
      return (
        <>
          {label[0]}
          <br />
          {label[1]}
        </>
      );
    }
    return label;
  };

  return (
    <>
      {/* Боковая панель с кнопкой меню */}
      <div className={`${classes.nav__bar}`} ref={menuRef}>
        <a 
          href="#" 
          className={`${classes.nav__trigger} ${isNavOpen ? classes['is-active'] : ''}`}
          onClick={handleNavTriggerClick}
        >
          <div className={`${classes.bars}`}></div>
        </a>
      </div>

      {/* Навигационное меню */}
      <nav className={`${classes.nav} ${isNavOpen ? classes['is-active'] : ''}`}>
        <ul className={`${classes.nav__list}`}>
          {menuItems.map((item) => (
            <li key={item.path} className={`${classes.nav__item}`}>
              <a
                href={item.path}
                className={activeItem === item.path ? `${classes['is-active']}` : ''}
                onClick={(e) => handleMenuItemClick(item, e)}
              >
                {renderLabel(item.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;