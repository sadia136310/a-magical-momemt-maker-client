import React from 'react';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';
import Photo from '../Photo/Photo';
// import HomeService from '../HomeService/HomeService';

import Section from '../Section/Section';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeService></HomeService>
      <Section></Section>
      <Photo></Photo>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;