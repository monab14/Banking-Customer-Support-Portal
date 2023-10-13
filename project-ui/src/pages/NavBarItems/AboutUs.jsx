import React from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const AboutUs = () => {
  const imgStyle = {
    width: '100%',
  };

  return (
    <div>
      <NavBar/>
        <img src='MonaImages/aboutus1.png' style={imgStyle} alt='About Us 1'></img>
        <img src='MonaImages/aboutus2.png' style={imgStyle} alt='About Us 2'></img>
        <img src='MonaImages/aboutus3.png' style={imgStyle} alt='About Us 3'></img>
        <img src='MonaImages/aboutus4.png' style={imgStyle} alt='About Us 4'></img>
        <img src='MonaImages/aboutus5.png' style={imgStyle} alt='About Us 5'></img>
        <img src='MonaImages/aboutus6.png' style={imgStyle} alt='About Us 6'></img>
        <img src='MonaImages/aboutus7.png' style={imgStyle} alt='About Us 7'></img>
        <Footer/>
    </div>
  )
}

export default AboutUs;
