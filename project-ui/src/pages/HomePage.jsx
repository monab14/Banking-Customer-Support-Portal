import React from 'react';
import BannerCarousel from '../components/BannerCarousel'; // Import your banner carousel component
import FaqSection from '../components/FaqSection'; // Import your FAQ component
import Chatbot from '../components/Chatbot'; // Import your Chatbot component
function HomePage() {
  return (
    <div className="HomePage">
      <BannerCarousel />
      <FaqSection />
      <Chatbot />
    </div>
  );
}

export default HomePage;