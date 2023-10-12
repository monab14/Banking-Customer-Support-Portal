import React from 'react';
import BannerCarousel from '../components/BannerCarousel'; 
import FaqSection from '../components/FaqSection'; 
import Chatbot from '../components/Chatbot'; 

const HomePage = () => {
    const containerStyle = {
        backgroundColor: '#F0F2EF',
        borderRadius: '10px',
        padding: '10px',
    };

    return (
        <div className="HomePage">
            <div className=" container mb-5 mt-5 rounded" style={containerStyle}>
                <h1 style={{ color: '#750D37' }}>Welcome to Axis bank</h1>
            </div>

            <BannerCarousel />
            
            <FaqSection />
            <Chatbot />
        </div>
    );
};

export default HomePage;