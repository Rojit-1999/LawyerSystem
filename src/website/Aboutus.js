// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Aboutus = () => {
//   return (
//     <div style={{ maxWidth: '1550px', margin: '0 auto' }}  className='bg-[#000300]'>
//     <Navbar />
//     <div className="container mx-auto px-4 py-16 bg-white">
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//           <div className="rounded-lg overflow-hidden">
//             <img src='/images/manish.jpg' alt="Team member" width="300" height="300" />
//             <div className="p-6">
//               <h3 className="text-lg font-medium mb-2">Manish Thapaliya</h3>
//               <p className="text-gray-600 mb-4">Founder</p>
//               <p className="text-gray-600 leading-relaxed mb-4">
//               As a founder of Hamrowakil, I am proud to have been a part of creating a platform that bridges the gap between lawyers and clients. Our goal has always been to provide a seamless experience for both parties, and we have achieved this through the use of modern technology and innovative features.
//               </p>
//               <div className="flex items-center">
//                 <p className="text-sm font-medium text-gray-600">We believe in pushing boundaries and exceeding expectations.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//           <div className="rounded-lg overflow-hidden">
//           <img src='/images/pradeep.jpg' alt="Team member" width="300" height="300" />
//             <div className="p-6">
//               <h3 className="text-lg font-medium mb-2">Pradeep Karki</h3>
//               <p className="text-gray-600 mb-4">Founder</p>
//               <p className="text-gray-600 leading-relaxed mb-4">
//               It has been an incredible journey building Hamrowakil alongside my fellow founders. Our shared vision of making legal services more accessible and convenient for everyone has been the driving force behind this project. I am excited to see where this platform takes us in the future.
//               </p>
//               <div className="flex items-center">
//                 <p className="text-sm font-medium text-gray-600">What we do is more than just a job. It's a passion.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//           <div className="rounded-lg overflow-hidden">
//           <img src='/images/anuj.jpg' alt="Team member" width="300" height="300" />
//             <div className="p-6">
//               <h3 className="text-lg font-medium mb-2">Anuj Puri</h3>
//               <p className="text-gray-600 mb-4">Founder</p>
//               <p className="text-gray-600 leading-relaxed mb-4">
//               Hamrowakil is more than just a legal services platform to me, it is a means to empower individuals by giving them access to quality legal counsel. I look forward to seeing the positive impact that Hamrowakil has on our clients and the legal industry as a whole.
//               </p>
//               <div className="flex items-center">
//                 <p className="text-sm font-medium text-gray-600">We are dedicated to delivering the best customer experience possible.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </div>
//   );
// }

// export default Aboutus;

import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { card, message, testimonialsTitle } from "../home/styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const theme = createTheme();

const Aboutus = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="bg-[#000300]">
        <Navbar />
      </div>
      <div class="flex items-center justify-center pt-16">
        <div class="w-1/12 lg:w-1/2 flex items-center justify-center pt-24">
          <img
            src="/images/Client__Signup.jpeg"
            alt="Hamrowakil Logo"
            className="w-auto object-contain mx-auto"
          />
        </div>
        <div class="w-full lg:w-1/2 p-10 text-justify">
          <h2 class="text-3xl font-bold mb-5">About Hamrowakil</h2>
          <p class="text-lg mb-5">
            Welcome to Hamrowakil, the online platform that connects clients
            with verified lawyers in Nepal. Our mission is to make legal
            services more accessible and convenient for everyone, regardless of
            their location or financial situation. We understand that legal
            issues can be stressful and complicated, and we want to provide a
            solution that makes it easy for you to find a trusted lawyer who can
            help you with your specific needs.
          </p>
          <p class="text-lg mb-5">
            At Hamrowakil, we take pride in our commitment to providing
            high-quality legal services to our clients. Our team of experienced
            lawyers is dedicated to delivering personalized and timely solutions
            to our clients' legal issues. We believe that every client deserves
            the best legal representation, and we work tirelessly to ensure that
            our services meet and exceed their expectations.
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center pt-12">
        <div class="w-full lg:w-1/2 p-10 text-justify">
          <p class="text-lg mb-5">
            Our platform is designed with the user in mind, making it easy to
            find the right lawyer for your needs. With our easy-to-use
            interface, you can browse through our list of verified lawyers, read
            reviews and ratings from previous clients, and connect with a lawyer
            who best fits your needs. We also offer a range of legal services,
            including civil litigation, insurance defense, personal injury, and
            case investigation.
          </p>
          <p class="text-lg mb-5">
            At Hamrowakil, we are committed to upholding the highest standards
            of professionalism and ethics in the legal profession. Our team of
            lawyers undergoes a rigorous verification process to ensure that
            they meet our strict requirements for expertise and integrity. We
            also offer ongoing training and support to our lawyers to ensure
            that they stay up-to-date with the latest legal developments and
            best practices. We are proud to be a part of the growing legal tech
            industry in Nepal and are excited to continue innovating and
            improving our platform to better serve our clients. Thank you for
            choosing Hamrowakil, and we look forward to helping you with your
            legal needs.
          </p>
        </div>
        <div class="lg:w-1/2 flex items-center justify-center">
          <img
            src="/images/Client__Signin.jpeg"
            alt="Hamrowakil Logo"
            className="w-full h-auto"
          />
        </div>
      </div>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h3" sx={testimonialsTitle}>
            Our Founders
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={card}>
                <CardMedia
                  component="img"
                  image="images/manish.jpg"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={message}
                  >
                    "We believe in pushing boundaries and exceeding
                    expectations."
                  </Typography>
                  <Typography variant="h6">- Manish</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={card}>
                <CardMedia
                  component="img"
                  image="images/pradeep.jpg"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={message}
                  >
                    "We are dedicated to delivering the best customer experience
                    possible."
                  </Typography>
                  <Typography variant="h6">- Pradeep</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={card}>
                <CardMedia
                  component="img"
                  image="images/anuj.jpg"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={message}
                  >
                    " What we do is more than just a job. It's a passion."
                  </Typography>
                  <Typography variant="h6">- Anuj</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <div className="bg-[#000300]">
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Aboutus;
