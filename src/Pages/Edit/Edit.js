import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {
    const storedReview = useLoaderData();
    return (

        <div>
            <h2 className='text-2xl text-center text-purple-400 my-5'>You can Update your Review here!!</h2>
            <form className='text-center'>

                <div className='my-10'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-1/3  input-bordered" />
                    <br />
                    <br />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-1/3  input-bordered" />
                    <br />
                    <br />
                    <input name="rating" type="text" placeholder="Rating" className="input input-ghost w-1/3  input-bordered" required />

                 

                </div>

                <textarea name="message" className="textarea textarea-bordered h-24 w-1/2" placeholder="Your Message" required></textarea>
                <br />

                <input className='btn btn-outline btn-warning my-5' type="submit" value="Update Review" />
            </form>
        </div>
    );
};

export default Edit;