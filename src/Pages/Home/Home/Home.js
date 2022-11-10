import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';
import Photo from '../Photo/Photo';
// import HomeService from '../HomeService/HomeService';

import Section from '../Section/Section';
import Subscribe from '../Subscribe/Subscribe';
 
const Home = () => {

  useTitle('Home')
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