import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const { img, title, price, Rating, description, _id } = useLoaderData();

   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-96' src={img} alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
                        <p>Rating: {Rating}</p>
                        <p className="py-6">{description}</p>

                    </div>
                </div>
            </div>

            <div className='text-center my-5'>

            <Link to={`/review/${_id}`}>  <button className="btn btn-outline btn-warning">Add Review</button></Link>
            </div>
        </div>
    );
};

export default ServicesDetails;