const ReviewRow = ({ review }) => {
    const { serviceName, price, image, customer, rating} = review;
    
    return (
        <div>
            <tr>
                <th>
                    <label>
                        <button className="btn btn-outline btn-warning">Delete</button>
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
                            <div className="text-sm opacity-50">{rating}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="font-bold">{serviceName}</div>
                    <div className="text-sm opacity-50">{price}$</div>
                </td>
                <td>
                <th>
                    <label>
                        <button className="btn btn-outline btn-warning">Edit</button>
                    </label>
                </th>
                </td>
            </tr>
        </div>
    );
};

export default ReviewRow;