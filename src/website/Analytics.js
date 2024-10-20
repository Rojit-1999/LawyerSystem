import React, { useState, useEffect } from 'react';
import Gif from '../assets/Gif.gif';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const Analytics = () => {
  // const [count, setCount] = useState(10);
  // const limit = 200;
  // const [limit, setLimit] = useState(100);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (count === limit) {
  //       clearInterval(intervalId);
  //     } else {
  //       setCount(count + 1);
  //     }
  //   }, 50);
  //   return () => clearInterval(intervalId);
  // }, [count, limit]);

  return (
    <div className='w-full bg-white py-16 px-4'>
      {/* <div className='flex justify-center  text-2xl'>
        <EmojiEventsOutlinedIcon fontSize="large" />
        <div>{count}</div>
        <div> Honers & Rewards </div>
      </div> */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Gif} alt='/' />
        <div className='flex flex-col justify-center'>
          {/* <p className='text-aqua font-bold '>FORM UP</p> */}
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Let's together bring a change in the legal industry!</h1>
          <p className='text-justify'>
            Hamrowakil is a cutting-edge platform that connects lawyers and clients in a convenient and efficient manner. Our mission is to simplify the process of finding and communicating with lawyers, making legal services accessible to everyone. With our platform, lawyers and clients can create accounts, schedule appointments, and engage in video calls, all while having the ability to chat during the call. Clients can search for lawyers based on name, speciality, and address, and have the ability to leave reviews for their experience. To ensure the credibility and verification of lawyers, our admin team verifies each lawyer's account before they are able to engage with clients. And with the added convenience of being able to sign in with Google accounts, using Hamrowakil has never been easier. Join us on our mission to revolutionize the legal industry.
          </p>
          {/* <button className='bg-black text-aqua w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;