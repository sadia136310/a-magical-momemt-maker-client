import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Loader from '../Loader/Loader';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
const [loading,setLoading]=useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('https://a-magical-momemt-maker-server.vercel.app/AllServices')
            .then(res => res.json())
            .then(data => setServices(data))
            setLoading(false)

    }, []);
    useTitle('Services');
    if(loading){
        return <Loader></Loader>
    }
    return (
        <div>
            <h3 className='text-xl font-bold text-center text-purple-400'>Services</h3>
            <h3 className='text-3xl font-bold text-center'>Let's Checkout our services</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 mx-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;