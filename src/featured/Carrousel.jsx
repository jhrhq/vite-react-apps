import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
// Import css files
import "slick-carousel/slick/slick.css";
import image_one from '../resources/images/1.jpg';

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500
      };
    return (
        <div className='carousel_wrapper'
            style={{
                // backgroundColor:'red',
                height:`${window.innerHeight}px`,
                overFlow: 'hidden'
            }}
            >
            <Slider {...settings}>
                <div>
                    <div 
                    className='carrousel_image'
                     style={{background: `url(${image_one})`, height: `${window.innerHeight}px`}}>
                    </div>
                   
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;