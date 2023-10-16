import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ThankYouPage from './pages/customer/ThankYouPage';
import HomePage from './components/HomePage';
import CustomerDashboard from './pages/Admin/AdminDashboard';
import AdminDashboard from './pages/CustomerDashboard';
import LoginPage from './pages/customer/LoginPage';
import AdminLoginPage from './pages/Admin/Adminlogin';
import RegistrationPage from './pages/customer/RegistrationPage';
import AboutUs from './pages/NavBarItems/AboutUs';
import AdminAddFaq from './pages/Admin/AdminAddFaq';
import CustomerSupportPage from './pages/customer/CustomerSupportPage';
import TicketStatus from './pages/customer/TicketStatus'; // Import the TicketStatus component
function App() {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div className="App">
     {/* Conditionally render the NavBar */}
{(window.location.pathname !== '/customer-dashboard' && window.location.pathname !== '/ticket-status'
&& window.location.pathname !== '/admin-dashboard') &&
 <NavBar/>}


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Adminlogin" element={<AdminLoginPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/admin-dashboard" element={<CustomerDashboard />} />
        <Route path="/ticket-status" element={<TicketStatus />} /> {/* Add this route */}
        
      </Routes>
    </div>
  );
}

export default App;
