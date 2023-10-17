import React from 'react';
import BannerCarousel from '../components/BannerCarousel'; 
import FaqSection from '../components/FaqSection'; 
import Chatbot from '../components/Chatbot'; 
import Footer from './Footer';
import NavBar from './NavBar';

const HomePage = () => {
    const imgStyle = {
        width: '100%',
        height :'300px'
      };
   
    return (
        <div className="HomePage">
            <NavBar/>
            <div className=" container mb-5 mt-5 rounded" style={containerStyle}>
                <h1 className="text-center" style={{ color: '#750D37' }}>Welcome to Axis bank</h1>
            </div>
            <img src='MonaImages/dil se open.jpg' width='1520px' height='500px'></img>
            <br/> <br/><br/>
            
            <img src='MonaImages/home.png' width='1520px' height='500px' style={imgStyle}></img>
            <br/>
            <BannerCarousel/>
            <FaqSection />
            <img src='MonaImages/home2.png' width='1520px' height='500px'  ></img>

            
           
            

            {/* <BannerCarousel /> */}
            
            
            {/* <Chatbot /> */}
            <Footer/>
        </div>
    );
};

export default HomePage;