import React from 'react';
import BannerCarousel from '../components/BannerCarousel'; // Import your banner carousel component
import FaqSection from '../components/FaqSection'; // Import your FAQ component
import Chatbot from '../components/Chatbot'; // Import your Chatbot component
function HomePage() {
    const containerStyle = {
        backgroundColor: '#F0F2EF',
        borderRadius: '10px', 
        padding: '10px',
    };
  return (
    <div className="HomePage">
        <div className= " container mb-5 mt-5 rounded" style={containerStyle}>
            <h1 style={{ color: '#750D37' }}>Welcome to Axis bank</h1>
        </div>
    <BannerCarousel />
    <FaqSection />
    <Chatbot />
    </div>
  );
}

export default HomePage;