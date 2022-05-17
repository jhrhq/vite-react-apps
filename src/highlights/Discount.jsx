import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-reveal';

const Discount = () => {
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            discount < 30 && setDiscount((prev) => prev + 1)
        }, 30)
    },[discount])
    
    return (
        
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade left>
                        <div className="discount_percentage">
                            <span>{discount}</span>
                            <span>Off</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, aperiam.</p>
                            <div >Button</div>
                        </div>
                    </Slide>
                </div>
            </div>
        
        );
};

export default Discount;