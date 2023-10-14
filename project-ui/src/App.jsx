import React from 'react';
<<<<<<< HEAD
import {  Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ThankYouPage from './pages/customer/ThankYouPage';
=======
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CustomerDashboard from './pages/CustomerDashboard';
>>>>>>> b5be628 (customer Dashboard)
import LoginPage from './pages/customer/LoginPage';
import AdminLoginPage from './pages/Admin/Adminlogin';
import RegistrationPage from './pages/customer/RegistrationPage';
import AboutUs from './pages/NavBarItems/AboutUs';
import AdminAddFaq from './pages/Admin/AdminAddFaq';
import CustomerSupportPage from './pages/customer/CustomerSupportPage';

function App() {
<<<<<<< HEAD
  const navigate = useNavigate();
  return (
    <div className="App">
      
=======
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div className="App">
      {/* Conditionally render the NavBar */}
      {window.location.pathname !== '/customer-dashboard' && <NavBar/>}
>>>>>>> b5be628 (customer Dashboard)
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Adminlogin" element={<AdminLoginPage />} />
        {/* <Route path="/adminAddFaq" element={<AdminAddFaq />} /> */}
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
<<<<<<< HEAD
        <Route path="/thank-you" element={<ThankYouPage navigate={navigate} />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/Support" element={<CustomerSupportPage />} />
        </Routes>
     
=======
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
      </Routes>
>>>>>>> b5be628 (customer Dashboard)
    </div>
  );
}

export default App;
