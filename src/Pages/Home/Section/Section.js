import React from 'react';
import img from '../../../images/4.jpg'

const Section = () => {
    return (
        <div className='mx-8 my-3'>
            <h1 className='text-xl font-bold text-purple-400 text-center my-4'>About Us</h1>
               
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='w-full' src={img} alt="Movie" /></figure>
                <div className="card-body bg-purple-100">
                         <h2 className="card-title">Wanna know about us?..!</h2>
                    <p>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning">see more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;