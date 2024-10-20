import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const Data = [
    {
      id: 1,
      title: "About Hamrowakil",
      firstdata: "About Us",
      seconddata: "Lawyers",
      thirddata: "Contact",
      fourthdata: "Privacy Policy",
    },
    {
      id: 2,
      title: "Communities",
      firstdata: "Support",
      seconddata: "Practise Areas",
      thirddata: "Won Cases",
      fourthdata: "Pages",
    },
    {
      id: 3,
      title: "Contact Information",
      firstdata: <div><LocationOnIcon /> Chitwan, Nepal</div>,
      seconddata: <div><PhoneInTalkIcon /> +977-9876543210</div>,
      thirddata:  <div><LanguageIcon /> hamrowakil.com</div>,
      fourthdata:  <div><EmailIcon /> hamrowakil112@gmail.com</div>,
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-aqua">HAMROWAKIL</h1>
        <p className="py-4">
          Copyright ©2023 All rights reserved
          <br />
          Pradeep Manish Anuj
        </p>
        <div className="flex justify-around md:w-[75%] my-6">
          <FacebookRoundedIcon fontSize="large" className="button-hover hover:scale-105 duration-300" />
          <InstagramIcon fontSize="large" className="button-hover hover:scale-105 duration-300" />
          <TwitterIcon fontSize="large" className="button-hover hover:scale-105 duration-300" />
          <GitHubIcon fontSize="large" className="button-hover hover:scale-105 duration-300" />
          <YouTubeIcon fontSize="large" className="button-hover hover:scale-105 duration-300" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        {Data.map((item) => (
          <div>
            <h1 key={item.id} className="font-bold text-gray-400">{item.title}</h1>
            <ul>
              <li className="py-2 text-sm button-hover">{item.firstdata}</li>
              <li className="py-2 text-sm button-hover">{item.seconddata}</li>
              <li className="py-2 text-sm button-hover">{item.thirddata}</li>
              <li className="py-2 text-sm button-hover">{item.fourthdata}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
