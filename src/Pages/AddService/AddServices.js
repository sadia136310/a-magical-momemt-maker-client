import React from 'react';

const AddServices = () => {

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        console.log(title, image, rating, description, price);


        const addServices = {

            title,
            price,
            img:image,
            Rating:rating,
            description,
        }
        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addServices)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Added Successfully!');
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }
    return (
        <div>
            <div className='my-12 mx-9'>
                <h2 className='text-center text-3xl text-pink-300 py-7'>Add Service here!!!</h2>
                <form onSubmit={handleAddService} >

                    <div >

                        <input name="title" type="text" placeholder="title" className="input input-ghost w-1/2  input-bordered bg-purple-100" />
                        <br />
                        <br />
                        <input name="image" type="text" placeholder="image" className="input input-ghost w-1/2  input-bordered bg-purple-100" required />
                        <br />
                        <br />
                        <input name="rating" type="text" placeholder="rating" className="input input-ghost 3/4  input-bordered bg-purple-100" required />
                        <br />
                        <br />
                        <input name="price" type="text" placeholder="price" className="input input-ghost w-3/4  input-bordered bg-purple-100" required />

                        <br />
                        <br />
                        <textarea name="description" className="textarea textarea-bordered h-24 w-full bg-purple-100" placeholder="description" required></textarea>
                    </div>
                    <br />


                    <input className='btn btn-outline btn-warning' type="submit" value="Add Service" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;