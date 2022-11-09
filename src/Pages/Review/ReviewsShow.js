import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewsShow = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div>
<h1 className='text-3xl'>Here is {reviews.length} review.</h1>
        </div>
    );
};

export default ReviewsShow;