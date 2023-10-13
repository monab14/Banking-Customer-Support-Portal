import React from 'react';
import { Carousel } from 'react-bootstrap';


const BannerCarousel = () => {
    return (
    <div className="col text-center container mb-3">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="MonaImages/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="MonaImages/2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
    <img
          className="d-block w-100"
          src="MonaImages/3.jpg"
          alt="Third slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src="MonaImages/4.jpg"
          alt="fourth slide"
        />
          </Carousel.Item>
          <Carousel.Item>
        <img
          className="d-block h-90 w-100"
          src="MonaImages/5.jpg"
          alt="fifth slide" 
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default BannerCarousel;