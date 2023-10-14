import React from 'react';
import logoAxis from '../../images/logoAxis.jpeg';

const dropdownMenuOptions = [
    {
        value: 'instaService',
        label: 'Insta Service',
        subOptions: [
            {
                value: 'cards',
                label: 'Cards',
                subOptions: [
                    { value: 'debitCard', label: 'Block Debit Card' },
                    { value: 'creditCard', label: 'Block Credit Card' },
                    { value: 'UpdateDebitCard', label: 'Update Debit Card' }
                ]
            },
            { value: 'downloads', label: 'Downloads' },
            { value: 'otherRequests', label: 'Other Requests' },
            { value: 'loanServices', label: 'Loan Services' },
            { value: 'myDetails', label: 'My Details' },
            { value: 'accountDetails', label: 'Account Details' }
        ]
    }
];

const SupportNavBar = () => {
    const navStyle = {
        backgroundColor: '#871f40',
        borderBottom: '1px solid #871f40',
    };

    const linkStyle = {
        color: 'white',
    };

    const renderDropright = (options) => {
        return (
            <ul className="dropdown-menu">
                {options.map((option, index) => (
                    <li key={index} style={{ listStyleType: 'none' }}>
                        <a
                            className="dropdown-item"
                            href={`/${option.value}`}
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                transition: 'color 0.3s',
                            }}
                        >
                            {option.label}
                        </a>
                    </li>
                ))}
            </ul>
        );
    };

    const renderDropdown = (options) => {
        return (
            <ul className="dropdown-menu">
                {options.map((option, index) => (
                    <li key={index} style={{ listStyleType: 'none' }}>
                        <a
                            className="dropdown-item"
                            href={`/${option.value}`}
                            style={{
                                color: '#000',
                                textDecoration: 'none',
                                transition: 'color 0.3s',
                            }}
                        >
                            {option.label}
                        </a>
                        {option.subOptions && option.subOptions.length > 0 && renderDropright(option.subOptions)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <nav className="navbar navbar-expand-lg" style={navStyle}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={linkStyle}>
                    <img src={logoAxis} alt="Logo" style={{ height: '50px', width: 'auto', padding: '5px' }} />
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item" style={{ marginRight: '20px' }}>
                            <a className="nav-link" href="/home" style={linkStyle}>
                                Home
                            </a>
                        </li>
                        {dropdownMenuOptions.map((option, index) => (
                            <li key={index} style={{ marginRight: '20px', listStyleType: 'none' }}>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        id={`dropdownMenuButton-${option.value}`}
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{
                                            backgroundColor: '#871f40',
                                            color: '#fff',
                                            minWidth: '150px',
                                        }}
                                    >
                                        {option.label}
                                    </button>
                                    {renderDropdown(option.subOptions)}
                                </div>
                            </li>
                        ))}
                        <li className="nav-item" style={{ marginRight: '20px' }}>
                            <a className="nav-link" href="/#" style={linkStyle}>
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item" style={{ marginRight: '20px' }}>
                            <a className="nav-link" href="/#" style={linkStyle}>
                                Service Request Status
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default SupportNavBar;
