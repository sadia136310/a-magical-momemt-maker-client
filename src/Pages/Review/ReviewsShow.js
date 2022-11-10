import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const ReviewsShow = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers:{
                authorization : `Bearer ${localStorage.getItem('momentJwt-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);


    const handleDelete = id => {
        const proceed = window.confirm("Are you sure,you want to cancel this review?");
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                       alert('deleted successfully!')
                   
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    return (
        <div className='my-20 py-20'>
            {

                reviews.length === 0 ?
                    <p className='text-center text-3xl'> There is no review</p>

                    :
                    <div className="overflow-x-auto lg:mx-24">
                        <table className="table">

                            <tbody>


                                {
                                    reviews.map(review => <ReviewRow
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                    ></ReviewRow>)
                                }

                            </tbody>

                        </table>
                    </div>
            }



        </div>
    );
};

export default ReviewsShow;