import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import pic1 from "../assets/pic-1.png";
import pic2 from "../assets/pic-2.png";
import pic3 from "../assets/pic-3.png";
import pic4 from "../assets/pic-4.png";
import pic5 from "../assets/pic-5.png";
import pic6 from "../assets/pic-6.png";

const Review = () => {
  const Data = [
    {
      id: 1,
      photo: pic1,
      description:
        "To search for lawyers combined with the convenience of appointment scheduling and video calls, made the process of finding legal help stress.",
      name: "Balkrishna Dhungel",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />{" "}
        </div>
      ),
    },
    {
      id: 2,
      photo: pic2,
      description:
        "I was skeptical about using an online platform for legal services, but Hamrowakil exceeded my expectations. Amazing!",
      name: "Anuradha Koirala",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />{" "}
        </div>
      ),
    },
    {
      id: 3,
      photo: pic3,
      description:
        "Hamrowakil has made finding and communicating with lawyers a breeze. I refer others to use this amazing site.Love it.",
      name: "Chandra Sharma",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />{" "}
        </div>
      ),
    },
    {
      id: 4,
      photo: pic4,
      description:
        "The platform's appointment scheduling, video calls, and chat feature make for a convenient and efficient experience.",
      name: "Ganga Adhikari",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />{" "}
        </div>
      ),
    },
    {
      id: 5,
      photo: pic5,
      description:
        "The ease of scheduling appointments, video calls, and the chat feature during the call made for a seamless and productive experience.",
      name: "Janak Raj Joshi",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <StarBorderIcon />{" "}
        </div>
      ),
    },
    {
      id: 6,
      photo: pic6,
      description: "Using Hamrowakil was a fantastic experience. Such an amazing website. Very much helpful. Highly recommended",
      name: "Sita Devi Shah",
      rating: (
        <div>
          {" "}
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />{" "}
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-10 items-center bg-white">
      {/* <section className="reviews" id="reviews"> */}
        <p className="flex justify-center text-7xl "> Client's Review </p>
        <div className="flex flex-row overflow-auto w-10/12 gap-5 ">
            {Data.map((item) => (
              <div>
              <div
                key={item.id}
                className="flex flex-col w-96 h-96 shadow-xl bg-white p-4 sm:my-10 my-8 rounded-lg border border-gray-300"
                style={{
                  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
                }}
              >
                <img
                  className="w-20 rounded-full mx-auto mt-[-3rem] bg-transparent"
                  src={item.photo}
                  alt="/"
                />

                <p className="text-center text-4xl mb-5 font-bold">
                  {item.name}
                </p>
                <h2 className="flex text-center text-xl">{item.description}</h2>
                <div className="flex justify-center my-6">{item.rating}</div>
              </div>
              {/* <div className="pb-[5rem]" /> */}
              </div>
            ))}
            </div>
      {/* </section> */}
    </div>
  );
};

export default Review;