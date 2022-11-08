import React from 'react';

const Subscribe = () => {
    return (
        <div className='my-12 bg-gray-300 py-8'>
            <h1 className="text-xl font-bold text-purple-400 text-center">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <p className='text-center'>Sign up for my newsletter to see new photos,tips and blog posts.Don't worry,we will never spam you.</p>



            <div className='d-flex text-center py-4 '>

                <input  placeholder="Email Address..." className='bg-purple-100 rounded-md py-1 px-2'/>
                <input placeholder="SUBSCRIBE" className="bg-black rounded-md py-1 px-2"/>
              
            </div>


        </div>

    );
};

export default Subscribe;