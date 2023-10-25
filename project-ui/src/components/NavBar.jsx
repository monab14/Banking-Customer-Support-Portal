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
                    <Link className="navbar-brand" to="#"><img src='MonaImages/axislogo.jpg' style={{ height: '2cm', width: '10cm', padding: '12px 80px' }} alt="Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ height: '1cm' }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>Personal</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/aboutUs" style={{ color: 'white' }}>About Us</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/Support" style={{ color: 'white' }}>Support</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/RegistrationPage" style={{ color: 'white' }}>Apply Now</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/contact" style={{ color: 'white' }}>Contact Us</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#ab5571', minWidth: '150px' }}>
                                        English
                                    </button>
                                    <ul className="dropdown-menu" style={{ minWidth: '100%' }}>
                                        <li><Link className="dropdown-item" to="/">English</Link></li>
                                        <li><Link className="dropdown-item" to="/">हिंदी</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item mx-3" style={{ backgroundColor: '#ffffff', color: ' #ab5571', borderRadius: '5px', background: '#ab5571', border: '1px solid #ab5571' }}>
                                <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#ab5571', minWidth: '150px' }}>
                                        LOGIN
                                    </button>
                                    <ul className= "dropdown-menu" style={{ minWidth: '100%' }}>
                                        <li><Link className="dropdown-item" to="/login" onClick={() => handleLogin('customer')}>Customer Login</Link></li>
                                        <li><Link className="dropdown-item" to="/Adminlogin" onClick={() => handleLogin('corporate')}>Corporate Login</Link></li>
                                        <li><Link className="dropdown-item" to="/teamLogin" onClick={() => handleLogin('corporate')}>Support Team Login</Link></li>
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
