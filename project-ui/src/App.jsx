import React from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CustomerDashboard from './pages/CustomerDashboard'
import LoginPage from './pages/customer/LoginPage';
import AdminLoginPage from './pages/Admin/Adminlogin';
import RegistrationPage from './pages/customer/RegistrationPage';
import AboutUs from './pages/NavBarItems/AboutUs';
import AdminAddFaq from './pages/Admin/AdminAddFaq';
import FaqPage from './pages/customer/FaqPage'
import CustomerSupportPage from './pages/customer/CustomerSupportPage';

import ComplaintPage from './pages/customer/ComplaintPage';
import ContactPage  from './pages/ContactPage';
import ThankYouPage from './pages/customer/ThankYouPage';
import AdminSolveQuery from './pages/Admin/AdminSolveQuery';


function App() {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Adminlogin" element={<AdminLoginPage />} />

        <Route path="/Support" element={<CustomerSupportPage />} />
        <Route path="/faqs" element={<FaqPage />} /> 
        <Route path="/adminAddFaq" element={<AdminAddFaq />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/thank-you" element={<ThankYouPage navigate={navigate} />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/complaintPage" element={<ComplaintPage />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />

      </Routes>
    </div>
  );
}

export default App;
