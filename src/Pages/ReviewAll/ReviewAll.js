import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewAllRow from './ReviewAllRow';

const ReviewAll = () => {
    const { service } = useLoaderData();

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/review?serviceId=${service}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [service]);


    return (
        <div className='my-10'>
            <h1 className='lg:mx-24 text-3xl text-purple-400 '>All Reviews are Here!!.</h1>

            <div className="overflow-x-auto lg:mx-24">
                <table className="table">

                    <tbody>
                        {
                            reviews.map(review => <ReviewAllRow
                                key={review._id}
                                review={review}

                            ></ReviewAllRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};


export default ReviewAll;