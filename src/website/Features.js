import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Service from './Service';

const Features = () => {
  return (
    <div style={{ maxWidth: '1550px', margin: '0 auto' }}  className='bg-[#000300]'>
    <Navbar />
    <Service />
    <Footer />
    </div>
  );
}

export default Features;
