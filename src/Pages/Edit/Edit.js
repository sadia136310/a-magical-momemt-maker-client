import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {
    const storedReview = useLoaderData();
    const [update, setUpdate] = useState(storedReview);


    const handleReviewUpdate = (event) => {
        event.preventDefault();
        // console.log(update);
        fetch(`http://localhost:5000/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('review updated');
                    console.log(data);
                 
                }

            })
    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUpdate = { ...update }
        newUpdate[field] = value;
        setUpdate(newUpdate);

    }
    return (

        <div>
            <h2 className='text-2xl text-center text-purple-400 my-5'>You can Update your Review here!!</h2>
            <form onSubmit={handleReviewUpdate} className='text-center'>

                <div className='my-10'>

                    <input name="name" onChange={handleInputChange} defaultValue={storedReview.customer} type="text" placeholder="name" className="input input-ghost w-1/3  input-bordered" />
                    <br />
                    <br />

                    <input name="rating" onChange={handleInputChange} defaultValue={storedReview.rating} type="text" placeholder="Rating" className="input input-ghost w-1/3  input-bordered" required />
                    <br />
                    <br />

                    <input name="image" onChange={handleInputChange} defaultValue={storedReview.image} type="text" placeholder="Image" className="input input-ghost w-1/2  input-bordered" />

                </div>

                <textarea name="message" onChange={handleInputChange} defaultValue={storedReview.message} className="textarea textarea-bordered h-24 w-1/2" placeholder="Your Message" required></textarea>
                <br />

                <input className='btn btn-outline btn-warning my-5' type="submit" value="Update Review" />
            </form>
        </div>
    );
};

export default Edit;