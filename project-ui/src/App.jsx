import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'; 
import LoginPage from './pages/customer/LoginPage';
import AdminLoginPage from './pages/Admin/Adminlogin';


function App() {
  return (
    <div className="App">
      <NavBar/>
      
        <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Adminlogin" element={<AdminLoginPage />} />

        </Routes>
     
    </div>
  );
}

export default App;

