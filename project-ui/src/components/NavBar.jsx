import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

useEffect(() => {
    const dropdownElement = document.querySelector('.dropdown-toggle');
    const bootstrapDropdown = new window.bootstrap.Dropdown(dropdownElement);
return () => {
            bootstrapDropdown.dispose();
        };
}, []);
    
    const handleLogin = (userType) => {
        console.log(`Logging in as ${userType}...`);
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed" style={{ backgroundColor: '#871f40' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src='MonaImages/axislogo.jpg' style={{ height: '2cm', width: '10cm', padding: '12px 80px' }} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ height: '1cm' }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="/" style={{ color: 'white' }}>Personal</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/aboutUs" style={{ color: 'white' }}>About Us</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="/Support" style={{ color: 'white' }}>Support</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="RegistrationPage" style={{ color: 'white' }}>Apply Now</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/contact" style={{ color: 'white' }}>Contact Us</a>
                            </li>
                            <li className="nav-item mx-3">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#ab5571', minWidth: '150px' }}>
                                        English
                                    </button>
                                    <ul className="dropdown-menu" style={{ minWidth: '100%' }}>
                                        <li><a className="dropdown-item" href="#">English</a></li>
                                        <li><a className="dropdown-item" href="#">हिंदी</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item mx-3" style={{ backgroundColor: '#ab5571', color: '#ffffff', borderRadius: '5px', background: '#ab5571', border: '1px solid #ab5571' }}>
                                <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#ab5571', minWidth: '150px' }}>
                                        LOGIN
                                    </button>
                                    <ul className= "dropdown-menu" style={{ minWidth: '100%' }}>
                                        <li><a className="dropdown-item" href="/login" onClick={() => handleLogin('customer')}>Customer</a></li>
                                        <li><a className="dropdown-item" href="/Adminlogin" onClick={() => handleLogin('corporate')}>Corporate</a></li>
                                    </ul>  
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;
