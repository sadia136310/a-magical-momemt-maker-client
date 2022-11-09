import React from 'react';
import { Link } from 'react-router-dom';


const ReviewRow = ({ review, handleDelete }) => {
    const { _id,  image, customer, rating,message } = review;



    return (
        <div>
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-warning">Delete</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">


                                <img src={image} alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">Rating: {rating}</div>
                        </div>
                    </div>
                </td>
                <td>
                <div className="text-sm opacity-50">text-review</div>
                    <div className="font-bold">{message}</div>
                    
                 
                </td>
                <th>
                        <label>
                            <Link to={`/edit/${_id}`}><button className="btn btn-outline btn-warning">Edit</button></Link>
                        </label>
                    </th>
            </tr>
        </div>
    );
};

export default ReviewRow;