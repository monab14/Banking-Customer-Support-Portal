import React from 'react';
import {  Routes, Route } from 'react-router-dom';
<<<<<<< HEAD

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';

=======
import HomePage from './pages/HomePage'; 
import LoginPage from './pages/customer/LoginPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLoginPage from './pages/Admin/Adminlogin';
>>>>>>> 8d45f24 (login and adminloginpage)

function App() {
  return (
    <div className="App">
      
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<HomePage/>} />
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Adminlogin" element={<AdminLoginPage />} />
>>>>>>> 8d45f24 (login and adminloginpage)
        </Routes>
     
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;

>>>>>>> 8d45f24 (login and adminloginpage)
