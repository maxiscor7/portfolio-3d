import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SliderLevex.css'
import sliderLevex1 from '../../assets/sliderLevex1.png'
import sliderLevex2 from '../../assets/sliderLevex2.png'
import sliderLevex3 from '../../assets/sliderLevex3.png'
import sliderLevex4 from '../../assets/sliderLevex4.png'

const SliderLevex = () => {
    return (
        <div className="visual-style-section">
            
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderLevex1}
                        alt="Primera imagen"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderLevex2}
                        alt="Segunda imagen"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderLevex3}
                        alt="Tercera imagen"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderLevex4}
                        alt="Tercera imagen"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default SliderLevex