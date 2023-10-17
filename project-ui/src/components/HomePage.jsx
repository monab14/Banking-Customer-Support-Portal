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
            <div className=" container " style={{textAlign:'center'}}>
            <h1 style={{ color: '#750D37' }}><strong>Welcome to Axis Bank.</strong></h1>
               
            </div>
            <img src='MonaImages/dil se open.jpg' width='1520px' height='500px'></img>
            <br/> <br/><br/>
            
            <img src='MonaImages/home.png' width='1520px' height='500px' style={imgStyle}></img>
            <BannerCarousel/>
            <FaqSection />
            <img src='MonaImages/home2.png' width='1520px' height='500px'  ></img>

            
            
         <Chatbot /> 
            <Footer/>
        </div>
    );
};

export default HomePage;