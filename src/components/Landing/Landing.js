import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
// import Project from "./Project.js";
import Info from "./Info.js";
import Team from "./Team.js";
import Investor from "./Investor.js";
import heroimg from "../../Assets/h1.png";
import schoolimg from "../../Assets/school.webp";
import collegeimg from "../../Assets/college.webp";
import universityimg from "../../Assets/uni.webp";
import Itskillimg from "../../Assets/it.webp";
import travelimg from "../../Assets/travel.webp";
import internationalimg from "../../Assets/int-edu.png";
import marketimg from "../../Assets/market.webp";
import foodimg from "../../Assets/food1.webp";
import donationimg from "../../Assets/donate.webp";
import belikecustomimg from "../../Assets/bgp.webp";
import belikecustomimg2 from "../../Assets/Images/customer.jpeg";
import belikeproperty from "../../Assets/property.png";
import ecomimg from "../../Assets/e-com.webp";
import jobimg from "../../Assets/jobs.webp";
import healthimg from "../../Assets/health.webp";
import Map from "./Map.js";

const services = [
  { img: belikecustomimg, title: "Our IT Clients", link: "/schoolblock2" },
  { img: schoolimg, title: "Schools", link: "/school-portal-home" },
  { img: collegeimg, title: "Colleges", link: "/schoolblocks" },
  { img: universityimg, title: "Universities", link: "/uni-portal-home" },
  { img: healthimg, title: "Health", link: "/health-portal-home" },
  { img: belikeproperty, title: "Property Services", link: "/ser-portal-home" },
  { img: Itskillimg, title: "IT Skills", link: "/it-portal-home" },
  { img: donationimg, title: "Welfare Activities", link: "/donation-portal-home" },
  { img: travelimg, title: "Travel", link: "/tra-portal-home" },
  { img: internationalimg, title: "International Consultant", link: "/Consultant-portal-home" },
  { img: ecomimg, title: "Ecommerce", link: "/Ecommerce-portal-home" },
  { img: jobimg, title: "Jobs", link: "/Job-portal-home" },
  { img: marketimg, title: "Influencer/Bloggers", link: "/Influencer-portal-home" },
  { img: foodimg, title: "Food", link: "/food-portal-home" },
  { img: belikecustomimg2, title: "Legal Service", link: "/legal-home-portal" },
];

const Landingpage = () => {
  return (
    <>
      <div className="">
        <Navbar />
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center p-10 sm:p-20 bg-gradient-to-r from-green-400 to-blue-500">
          <div className="container flex flex-col items-center px-6 mx-auto md:flex-row md:px-12">
            {/* Text Section */}
            <motion.div
              className="text-center text-white md:w-1/2 md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl font-bold sm:text-4xl"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span>Focus on how to be social,</span>
                <br />
                <span>not how to do social.</span>
              </motion.h1>
              <motion.p
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Belike Group architects of brand stories, blending innovation and strategy to create compelling digital narratives that resonate with customers and leave a lasting imprint on the business landscape.
              </motion.p>
              <motion.button
                className="px-4 py-2 mt-6 font-bold text-blue-500 transition duration-300 bg-white rounded-lg sm:px-6 hover:bg-blue-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            {/* Image Section */}
            <motion.div
              className="flex justify-center mt-8 md:w-1/2 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.img
                src={heroimg}
                alt="Hero Section Image"
                className="w-full max-w-md animate-fadeIn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-gradient-to-r from-blue-400 to-white" id="servicesSection">
          <div className="container mx-auto text-center">
            <h1 className="mb-8 text-3xl font-bold text-white sm:text-5xl">Services</h1>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="transition duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Link to={service.link} className="flex flex-col items-center p-4 transition duration-300 rounded-lg shadow-lg sm:p-6 bg-gradient-to-br from-white to-white hover:shadow-2xl">
                    <img src={service.img} alt={service.title} className="object-cover w-24 h-24 mb-4 rounded-full sm:w-32 sm:h-32" />
                    <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">{service.title}</h2>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* <Project/> */}
        {/* <Info />
        <Team />
        <Investor /> */}
        {/* Footer */}
        <Map/>
        <Footer />
      </div>
    </>
  );
};

export default Landingpage;
