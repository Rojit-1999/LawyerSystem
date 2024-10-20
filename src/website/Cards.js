import React from 'react';
import { Link } from "react-router-dom";
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    const Data = [
        {
            id: 1,
            photo: Single,
            name: "Admin",
            firstline: "Verify Lawyers",
            secondline: "Notify Updates",
            thirdline: "Manage App",
        },
        {
            id: 2,
            photo: Double,
            name: "Client",
            firstline: "Book Appointment",
            secondline: "Join Video Call",
            thirdline: "Provide Review",
        },
        {
            id: 3,
            photo: Triple,
            name: "Lawyer",
            firstline: "Decide Appointment",
            secondline: "Join Video Call",
            thirdline: "Suggest Client",
        }
    ]

  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <h1 className="text-center text-7xl pb-[7rem]"> Sign Up </h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl border border-gray-300 flex flex-col p-4 my-4 rounded-lg hover:shadow-2xl hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Admin</h2>
              {/* <p className='text-center text-4xl font-bold'>Admin of HamroWakil</p> */}
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Verify Lawyers</p>
                  <p className='py-2 border-b mx-8'>Notify Updates</p>
                  <p className='py-2 border-b mx-8'>Manage App</p>
              </div>
              <div className='flex justify-around'><Link to="/adminsignin">
              <button className='bg-aqua w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300'>Get Started</button>
              </Link></div>
          </div>
          <div className='w-full shadow-xl border border-gray-300 bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:shadow-2xl hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Client</h2>
              {/* <p className='text-center text-4xl font-bold'>Sign Up to book appointments with lawyers</p> */}
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Book Appointment</p>
                  <p className='py-2 border-b mx-8'>Join Video Call</p>
                  <p className='py-2 border-b mx-8'>Provide Review</p>
              </div>
              <div className='flex justify-around'><Link to="/clientsignup">
              <button className='bg-aqua w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300'>Get Started</button>
              </Link></div>
              {/* <button className='bg-black text-aqua w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300'>Get Started</button> */}
          </div>
          <div className='w-full shadow-xl border border-gray-300 flex flex-col p-4 my-4 rounded-lg hover:shadow-2xl hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Lawyer</h2>
              {/* <p className='text-center text-4xl font-bold'>Sign Up to provide consultations to clients</p> */}
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Decide Appointment</p>
                  <p className='py-2 border-b mx-8'>Join Video Call</p>
                  <p className='py-2 border-b mx-8'>Suggest Client</p>
              </div>
              <div className='flex justify-around'><Link to="/lawyersignup">
              <button className='bg-aqua w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300'>Get Started</button>
              </Link></div>
          </div>
      </div>
    </div>
  );
};

export default Cards;