import React from 'react';
import { Carousel } from 'react-bootstrap';


const BannerCarousel = () => {
    return (
    <div classname="col text-center container mb-3">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/E5byoNYVgAI3CbO.jpg:large"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/DREI57oV4AEIZSV?format=jpg&name=900x900"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
    <img
          className="d-block w-100"
          src="https://pbs.twimg.com/profile_banners/714003800/1662109997/600x200"
          alt="Third slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/DEXD0jpUQAEjINJ?format=jpg&name=small"
          alt="fourth slide"
        />
          </Carousel.Item>
          <Carousel.Item>
        <img
          className="d-block h-90 w-100"
          src="https://pbs.twimg.com/media/DE62X6YXsAAf-qP?format=jpg&name=900x900"
          alt="fifth slide" 
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default BannerCarousel;
