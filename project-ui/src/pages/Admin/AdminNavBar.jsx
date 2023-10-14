import React from 'react';

const AdminNavBar = () => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#871f40' }}>
                    <div className="container-fluid">
                        <div className="d-flex align-items-center">
                            <a className="navbar-brand" href="/"><img src='MonaImages/axislogo.jpg' style={{ height: '2cm', width: '10cm', padding: '12px 80px' }} alt="Logo" /></a>

                            <ul className="navbar-nav  mb-lg-0">
                                <li className="nav-item d-flex align-items-center">

                                    <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{ height: '1cm', color: 'white', fontFamily: 'Roboto, sans-serif' }}>
                                        <h1 className="my-2 mx-5" style={{ fontFamily: 'inherit' ,color: '#871f40'}}>.......
                                            <span style={{color: '#ffffff'}} >Customer Support Team</span>
                                        </h1>
                                    </div>

                                    <a className="navbar-brand " href="/"><img src='https://www.svgrepo.com//show/293550/customer-service-support.svg' style={{ height: '2.5cm', width: '10cm' }} alt="CustomerSupportLogo" /></a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AdminNavBar;
