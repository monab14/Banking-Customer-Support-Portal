import React from 'react';

import {  Routes, Route, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import NavBar from './components/NavBar';
=======
import HomePage from './components/HomePage';
>>>>>>> 477266c (c)
import ThankYouPage from './pages/customer/ThankYouPage';
import HomePage from './components/HomePage';
import CustomerDashboard from './pages/CustomerDashboard';

import LoginPage from './pages/customer/LoginPage';
import AdminLoginPage from './pages/Admin/Adminlogin';
import RegistrationPage from './pages/customer/RegistrationPage';
import AboutUs from './pages/NavBarItems/AboutUs';
import AdminAddFaq from './pages/Admin/AdminAddFaq';
import CustomerSupportPage from './pages/customer/CustomerSupportPage';

function App() {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div className="App">
      {/* Conditionally render the NavBar */}
      {window.location.pathname !== '/customer-dashboard' && <NavBar/>}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Adminlogin" element={<AdminLoginPage />} />
        <Route path="/adminAddFaq" element={<AdminAddFaq />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
