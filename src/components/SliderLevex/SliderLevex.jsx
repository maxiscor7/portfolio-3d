import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SliderLevex.css';

const SliderLevex = ({ images }) => {
    return (
        <div className="visual-style-section">
            <Carousel>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image.src}
                            alt={image.alt || `Slide ${index + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default SliderLevex;