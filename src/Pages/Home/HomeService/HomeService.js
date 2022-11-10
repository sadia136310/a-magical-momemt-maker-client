import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServiceCard from './HomeServiceCard';



const HomeService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://a-magical-momemt-maker-server.vercel.app/HomeServices')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);
    return (
        <div>
            <h3 className='text-xl font-bold text-center text-purple-400'>Services</h3>
            <h3 className='text-3xl font-bold text-center'>Let's Checkout our services</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 mx-10'>
                {
                    services.map(service => <HomeServiceCard
                        key={service._id}
                        service={service}
                    ></HomeServiceCard>)
                }



            </div>
            <div className='text-center pb-9' >
                <Link to="/services"> <button className="btn btn-warning btn-outline">See All</button></Link>
            </div>

        </div>
    );
};

export default HomeService;