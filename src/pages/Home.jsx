import React from 'react'
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import Insights from '../components/Insights';
import Products from '../components/Products';
import SwiperHome from '../components/SwiperHome';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <Insights />
      <Products />
      <SwiperHome />
      <Footer/>
    </div>
  );
}

export default Home;