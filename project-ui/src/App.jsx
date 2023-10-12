import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

import LoginPage from './pages/customer/LoginPage';
import AdminLoginPage from './pages/Admin/Adminlogin';
import RegistrationPage from './pages/customer/RegistrationPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
        <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Adminlogin" element={<AdminLoginPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />

        </Routes>
     
    </div>
  );
}


export default App;

