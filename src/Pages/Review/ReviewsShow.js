import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const ReviewsShow = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div className='lg:mx-20 my-20 py-20'>
            <h1 className='text-center text-5xl'>Here is {reviews.length} review.</h1>

            <div className="overflow-x-auto">
                <table className="table ">

                    <tbody>


                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                            ></ReviewRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ReviewsShow;