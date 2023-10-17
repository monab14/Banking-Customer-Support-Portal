import React from 'react';
import { Carousel } from 'react-bootstrap';


const BannerCarousel = () => {
  const imgStyle = {
    width: '100%',


  };
  return (
    <div className="col text-center container "  >
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="MonaImages/c1.jpg" class="d-block" alt="MonaImages/1.jpg" style={imgStyle} />
          </div>
          <div class="carousel-item">
            <img src="MonaImages/c4.jpg" class="d-block " alt="MonaImages/2.jpg" style={imgStyle} />
          </div>
          <div class="carousel-item">
            <img src="MonaImages/c5.jpg" class="d-block " alt="MonaImages/3.jpg" style={imgStyle} />
          </div>
          <div class="carousel-item">
            <img src="MonaImages/c2.jpg" class="d-block " alt="MonaImages/5.jpg" style={imgStyle} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
};

export default BannerCarousel;