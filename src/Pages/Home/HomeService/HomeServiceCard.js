import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const HomeServiceCard = ({ service }) => {
    const { _id, img, title, price, Rating, description } = service;
    console.log(service);
    return (
        <div>
            <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl" style={{ width: '18rem' }}>


                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img src={img} alt='' /></figure>
                    </PhotoView>
                </PhotoProvider>


                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <p>Rating: {Rating}</p>
                    <p>  {description.slice(0, 100) + '.......'}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}>  <button className="btn btn-outline btn-warning">View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeServiceCard;
