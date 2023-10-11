import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed" style={{ backgroundColor: '#871f40' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src='axislogo.jpg' style={{ height: '2cm', width: '10cm', padding: '12px 80px' }} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ height: '1cm' }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Personal</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Business</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Priority</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Burgundy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>NRI</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Support</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Dil Se Open</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Explore Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Grab Deals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Make Payments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Bank Smart</a>
                            </li> <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Apply Now</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavBar
