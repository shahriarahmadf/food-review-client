import React from 'react';
import b1 from '../../../assets/images/banner-1.jpg'
import b2 from '../../../assets/images/banner-2.jpg'


const Banner = () => {
    return (
        <div className="h-96 carousel carousel-vertical rounded-box">

            <div className="carousel-item h-full flex justify-center">
                <img src={b1}/>
            </div> 

            <div className="carousel-item h-full flex justify-center">
                <img src={b2}/>
            </div> 
        </div>
    );
};

export default Banner;