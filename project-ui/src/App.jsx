import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import your HomePage component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
     
    </div>
  );
}

export default App;

