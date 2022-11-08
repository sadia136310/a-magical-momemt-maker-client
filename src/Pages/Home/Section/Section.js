import React from 'react';
import img from '../../../images/4.jpg'

const Section = () => {
    return (
        <div className='mx-8 my-3'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='w-96' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h1 className='text-xl font-bold text-purple-400 text-center'>About Us</h1>
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;