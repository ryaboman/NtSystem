import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
// import './App.css';

// import LoginRegistrationForm from './components/LoginRegistrationForm/LoginRegistrationForm';
import GuestPage from './pages/GuestPage/GuestPage';
import DevicePage from './pages/DevicesPage/DevicePage';

// Простые компоненты страниц
const HomePage = () => (
  <div className="page-content">
    <h1>Главная страница</h1>
    <p>Добро пожаловать в систему управления производственными данными</p>
    <p>Меню должно открываться по клику на кнопку слева</p>
  </div>
);

const NotFound = () => (
  <>
    {/* <LoginRegistrationForm /> */}
  </>
);

const GuestPage1 = () => (
  <>
    <GuestPage />
  </>
);

// ... остальные компоненты страниц (как в предыдущем коде)

function App() {
  return (
    <Router>
      <div className="app">
  
        <Sidebar />
        
        {/* Основной контент приложения - ДОЛЖЕН БЫТЬ DIV С КЛАССОМ main */}
        <div className="main">  
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<h1>Профиль</h1>} />
            <Route path="/devices" element={<DevicePage />} />
            <Route path="/documents" element={<h1>Документы</h1>} />
            <Route path="/notifications" element={<h1>Извещения</h1>} />
            <Route path="/directories" element={<GuestPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;