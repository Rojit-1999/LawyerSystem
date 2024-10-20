import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const Service = () => {

  const Data = [
    {
      id: 1,
      title: "Case Investigation",
      description:
        "Hamrowakil offers thorough and professional case investigation services, gathering evidence and conducting inquiries to help build strong cases for clients.",
      image: logo1
    },
    {
      id: 2,
      title: "Personal Injury",
      description:
        "Hamrowakil provides dedicated representation for clients who have been injured, helping them to recover the compensation they deserve in personal injury cases.",
      image: logo2
    },
    {
      id: 3,
      title: "Insurance Defense",
      description: "Hamrowakil offers comprehensive insurance defense services, representing insurance companies and their policyholders in a wide range of legal disputes and claims.",
      image: logo3
    },
    {
      id: 4,
      title: "Civil Ligitation",
      description: "Hamrowakil provides experienced and effective representation for clients in all areas of civil litigation, helping to resolve disputes and protect their rights and interests.",
      image: logo4
    },
    {
      id: 5,
      title: "Business Law",
      description: "Hamrowakil offers comprehensive and professional business law services to help clients navigate the complex legal landscape of running a business.",
      image: logo5
    },
    {
      id: 6 ,
      title: "Legal Counseling",
      description: "Hamrowakil offers expert legal counseling to help individuals and businesses make informed decisions and protect their rights.",
      image: logo6
    },
  ];

  return (
    <div className="bg-white">
        <h1 className="text-center text-7xl pb-[2rem] pt-[7rem]"> What We Do </h1>
      <div className="w-full py-[5rem] px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-x-8 gap-y-24">

        {Data.map(item => (
       
          <div key={item.id} className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              src={item.image}
              alt="/"
            />
            <p className="text-center text-4xl mb-5 font-bold">{item.title}</p>
            <h2 className="text-xl text-center">{item.description}</h2>
            {/* <button className="bg-aqua text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button> */}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
