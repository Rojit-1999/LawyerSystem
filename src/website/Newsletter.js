import React, { useState } from "react";
import Alert from "@mui/material/Alert";

const Newsletter = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");

  const handleButtonClick = () => {
    if (email){
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          {showAlert && (
            <div>
              <Alert severity="success">
                Done! You will be updated on mail.
              </Alert>
            </div>
          )}

            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleButtonClick}
                className="bg-aqua text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
              >
                Notify Me
              </button>
            </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-aqua">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
