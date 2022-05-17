import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-reveal';
import MyButton from '../utils/MyButton';

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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, odio cupiditate delectus sint voluptas id eius quas. Rem, corporis amet provident dolorum facere quasi placeat quod quam qui! Perferendis unde voluptatibus quaerat reiciendis repellat molestiae quo, asperiores molestias libero possimus. Excepturi laboriosam error praesentium voluptas quis velit accusamus nisi totam.</p>
                            <MyButton href='https://mui.com/material-ui/api/button/'
                                    size='medium'
                                    color='warning'
                                    text = 'Purchase Tickets' />
                        </div>
                    </Slide>
                </div>
            </div>
        
        );
};

export default Discount;