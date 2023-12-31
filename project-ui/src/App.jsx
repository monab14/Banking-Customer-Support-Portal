import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./pages/customer/LoginPage";
import AdminLoginPage from "./pages/Admin/Adminlogin";
import RegistrationPage from "./pages/customer/RegistrationPage";
import AboutUs from "./pages/NavBarItems/AboutUs";
import AdminAddFaq from "./pages/Admin/AdminAddFaq";
import FaqPage from "./pages/customer/FaqPage";
import CustomerSupportPage from "./pages/customer/CustomerSupportPage";
import ComplaintPage from "./pages/customer/ComplaintPage";
import ContactPage from "./pages/ContactPage";
import ThankYouPage from "./pages/customer/ThankYouPage";
import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerSupportTeamLogin from "./pages/CustomerSupportTeamLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import TicketStatus from "./pages/customer/TicketStatus";
import AdminRegisterPage from "./pages/Admin/AdminRegisterPage";
import AdminSolveQuery from "./pages/Admin/AdminSolveQuery";
import SupportTeam from "./pages/Admin/SupportTeam";
import RaisedTickets from "./pages/Admin/RaisedTickeks";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Adminlogin" element={<AdminLoginPage />} />
        <Route path="/Support" element={<CustomerSupportPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/adminAddFaq" element={<AdminAddFaq />} />
        <Route path="/teamLogin" element={<CustomerSupportTeamLogin />} />
        <Route path="/ticket-status" element={<TicketStatus />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route
          path="/thank-you"
          element={<ThankYouPage navigate={navigate} />}
        />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/complaintPage" element={<ComplaintPage />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/adminRegister" element={<AdminRegisterPage />} />
        <Route path="/solveQuery" element={<AdminSolveQuery />} />
        <Route path="/supportTeam" element={<SupportTeam />} />
        <Route path="/AllTickets" element={<RaisedTickets />} />
      </Routes>
    </div>
  );
}

export default App;
