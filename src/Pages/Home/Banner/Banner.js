import React from 'react';

import img1 from '../../../images/fashion-photogrphy.jpg';
import img2 from '../../../images/flower-729512_960_720.jpg';
import img3 from '../../../images/pexels-asad-photo-maldives-1268877.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full my-14">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} alt='' className="w-full h-96 " />
                <div className="absolute transform -translate-y-1/2 left-12 top-2/4">
                   <h1 className='text-3xl text-white'>Welcome to the Magical Moment</h1>
                 
                   <p className=' text-white'>Website offering awesome photography,professional development. Our services offers literally unique.This is an essential for make some good moment!!</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img3} alt='' className="w-full h-96 " />

                <div className="absolute transform -translate-y-1/2 left-12 top-2/4">
                   <h1 className='text-3xl text-white'>Welcome to the Magical Moment</h1>
                 
                   <p className=' text-white'>Website offering awesome photography,professional development. Our services offers literally unique.This is an essential for make some good moment!!</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img2} alt='' className="w-full h-96" />

                <div className="absolute transform -translate-y-1/2 left-12 top-2/4">
                   <h1 className='text-3xl text-white'>Welcome to the Magical Moment</h1>
                 
                   <p className=' text-white'>Website offering awesome photography,professional development. Our services offers literally unique.This is an essential for make some good moment!!</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;