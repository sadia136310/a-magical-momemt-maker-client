import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Photo from '../Phtoto/Photo';
import Section from '../Section/Section';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <Section></Section>
          <Photo></Photo>
          <Subscribe></Subscribe>
        </div>
    );
};

export default Home;