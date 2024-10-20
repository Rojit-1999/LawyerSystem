import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-aqua font-bold p-2">
          Empowering you through the legal process, one step at a time.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          {/* Defending your rights, */} For your rights
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            {/* Protecting your future. */} we are here
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Consult from the best lawyer just by sitting at your home because we
          are here to fight for your rights.
        </p>
        <div className="flex justify-around">
          <Link to="/clientsignup">
            <button className="bg-aqua w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300">
              Get Started
            </button>
          </Link>
        </div>
        {/* <button className='bg-aqua w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>Get Started</button> */}
      </div>
    </div>
  );
};

export default Hero;
