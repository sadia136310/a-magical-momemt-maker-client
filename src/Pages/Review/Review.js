import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const { img, title, price, Rating, description, _id } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const image = `${form.image.value}`;
        const rating = form.rating.value;
        const message = form.message.value;

        console.log(name, email, image, rating, message);


        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            img,
            Rating,
            message
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    }
    return (
        <div>
            <div className='my-12 mx-9'>
                <form onSubmit={handleReview}>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                        <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />

                        <input name="image" type="text" placeholder="Image" className="input input-ghost w-full  input-bordered" required />

                        <input name="rating" type="text" placeholder="Rating" className="input input-ghost w-full  input-bordered" required />

                        <input name="email" defaultValue={user?.email} type="text" placeholder="Your email" className="input input-ghost w-full  input-bordered" readOnly />
                    </div>
                    <br />
                    <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                    <input className='btn btn-outline btn-warning' type="submit" value="Add Your Review here" />
                </form>
            </div>
        </div>
    );
};

export default Review;