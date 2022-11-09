import React from 'react';

const ReviewRow = ({ review }) => {
    const { serviceName, price, email, customer, Rating } = review;
    return (
        <div>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{Rating}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="font-bold">{serviceName}</div>
                    <div className="text-sm opacity-50">{price}</div>
                </td>
                <td>
                    <div className="font-bold">
                    Edit
                    </div>
                </td>
            </tr>
        </div>
    );
};

export default ReviewRow;