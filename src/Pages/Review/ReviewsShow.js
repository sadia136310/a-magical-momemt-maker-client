import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const ReviewsShow = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`https://a-magical-momemt-maker-server.vercel.app/reviews?email=${user?.email}`,{
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
            fetch(`https://a-magical-momemt-maker-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                       toast.success('deleted successfully!')
                   
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    useTitle('My Reviews')
    return (
        <div className='my-20 py-20'>
            {

                reviews.length === 0 ?
                    <p className='text-center text-3xl text-purple-300'> There is no review here!!</p>

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