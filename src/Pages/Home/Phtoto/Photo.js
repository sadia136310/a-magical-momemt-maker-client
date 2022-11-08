import React from 'react';
import img1 from '../../../images/1.jpg'
import img2 from '../../../images/2.jpg' 
import img3 from '../../../images/3.jpg'

import img5 from '../../../images/5.jpg'
import img6 from '../../../images/6.jpg'
import img7 from '../../../images/7.jpg'

const Photo = () => {
    return (
       <div>
        <h1 className='text-xl font-bold text-purple-400 text-center my-4'>Recent Posts</h1>
        
        <div className='flex flex-nowrap p-7'>
        <div className="card w-96 rounded">
            <figure><img src={img1} alt="" /></figure>
           
        </div>
        <div className="card w-96 ">
            <figure><img src={img2} alt="" /></figure>
           
        </div>
        <div className="card w-96 ">
            <figure><img src={img3} alt="" /></figure>
           
        </div>
       
       
        </div>
       <div  className='flex flex-nowrap px-7'>
       <div className="card w-96 ">
            <figure><img src={img5} alt="" /></figure>
           
        </div>
        <div className="card w-96 ">
            <figure><img src={img6} alt="" /></figure>
           
        </div>
        <div className="card w-96 ">
            <figure><img src={img7} alt="" /></figure>
           
        </div>
       </div>
     
       </div>
    );
};

export default Photo;