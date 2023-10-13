import React from 'react';
import {  Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ThankYouPage from './pages/customer/ThankYouPage';
import LoginPage from './pages/customer/LoginPage';
import AdminLoginPage from './pages/Admin/Adminlogin';
import RegistrationPage from './pages/customer/RegistrationPage';
import AboutUs from './pages/NavBarItems/AboutUs';
import AdminAddFaq from './pages/Admin/AdminAddFaq';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      
      
        <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Adminlogin" element={<AdminLoginPage />} />
        {/* <Route path="/adminAddFaq" element={<AdminAddFaq />} /> */}
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/thank-you" element={<ThankYouPage navigate={navigate} />} />
        <Route path="/aboutUs" element={<AboutUs />} />

        </Routes>
     
    </div>
  );
}


export default App;

