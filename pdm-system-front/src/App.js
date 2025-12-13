import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

// Простые компоненты страниц
const HomePage = () => (
  <div className="page-content">
    <h1>Главная страница</h1>
    <p>Добро пожаловать в систему управления производственными данными</p>
    <p>Меню должно открываться по клику на кнопку слева</p>
  </div>
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
            <Route path="/devices" element={<h1>Изделия</h1>} />
            <Route path="/documents" element={<h1>Документы</h1>} />
            <Route path="/notifications" element={<h1>Извещения</h1>} />
            <Route path="/drawing" element={<h1>Систематизированные чертежи</h1>} />
            <Route path="/screws" element={<h1>Изделия крепежные</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;