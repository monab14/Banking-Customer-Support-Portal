import React from 'react';
import { Carousel } from 'react-bootstrap';

const DashboardCarousel = () => {
    return (
      <div className="col-md-6 text-center mb-1 border border-secondary">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="6.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="9.jpg_large"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="8.jpg"
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
                        className="d-block w-100"
                        src="MonaImages/5.jpg"
                        alt="fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default DashboardCarousel;
