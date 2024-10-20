import React from 'react';
import Analytics from './Analytics';
import Cards from './Cards';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Review from './Review';
import Service from './Service';


function MainWebsite() {
  return (
    <div style={{ maxWidth: '1550px', margin: '0 auto' }} className='bg-[#000300]'>
      <div style={{ position: 'sticky', top: 0, zIndex: 1 }} className='bg-[#000300] h-20'>
        <Navbar />
      </div>
      <Hero />
      <Analytics />
      <Newsletter />
      <Service />
      <Cards />
      <Review />
      <Footer />
    </div>
  );
}

export default MainWebsite;