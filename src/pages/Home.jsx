import React from 'react'
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
// import Insights from '../components/Insights';
import Products from '../components/Products';
import SwiperHome from '../components/SwiperHome';
import Footer from '../components/Footer';
import Missions from '../components/Missions';
import OurGoals from '../components/OurGoals';
import OurTeam from '../components/OurTeam';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Hero /> 
      <HomeAbout />
      <Missions />
      <OurGoals />
      <OurTeam/> 
      {/* <Insights /> */}
      <Products />
      <SwiperHome />
      <Footer/>
    </div>
  );
}

export default Home;