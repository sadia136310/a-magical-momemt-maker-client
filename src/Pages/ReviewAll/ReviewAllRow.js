import React from 'react';


const ReviewAllRow = ({ review }) => {
    const { image, customer, rating, message } = review;

    return (
        <div>
            <tr>
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
                <div className="text-sm opacity-50">review</div>
                    <div className="font-bold">{message}</div>


                </td>
            </tr>
        </div>

       
    );
};

export default ReviewAllRow;