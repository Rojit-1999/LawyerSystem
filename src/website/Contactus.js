import React, { useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setAlertMessage("Form submitted successfully!");
    setTimeout(() => {
      setAlertMessage("");
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <div style={{ maxWidth: '1550px', margin: '0 auto' }}  className='bg-[#000300]'>
    <Navbar />
    <div className="bg-gray-100 py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit}>
        {alertMessage && (
        <div className="bg-green-200 p-2 mb-4 text-green-800">{alertMessage}</div>
      )}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-900 font-bold mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-900 font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-900 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Contactus;