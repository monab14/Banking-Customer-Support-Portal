import React from 'react';

const CustomerSupportPage = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
    };

    const headerStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        width: '100%',
        padding: '10px 0',
        textAlign: 'center',
    };

    const contentContainerStyle = {
        backgroundColor: '#f2f2f2',
        padding: '50px',
        width: '100%',
        boxSizing: 'border-box',
    };

    const formStyle = {
        textAlign: 'left',
        maxWidth: '300px',
        margin: '0 auto',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>Logo</div>
            <div style={contentContainerStyle}>
                <h1>Contact Our Customer Support</h1>
                <p>We are here to assist you. Please feel free to reach out.</p>

                <h2>Contact Us</h2>
                <form style={formStyle}>
                    <div>
                        <input type="text" placeholder="Your Name" style={inputStyle} />
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email" style={inputStyle} />
                    </div>
                    <div>
                        <textarea placeholder="Your Message" style={inputStyle}></textarea>
                    </div>
                    <div>
                        <button type="submit" style={buttonStyle}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CustomerSupportPage;
