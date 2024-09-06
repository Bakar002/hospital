import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <hr className="my-4 border-black border-1" />
      <footer className="py-6 text-black bg-white">
        <div className="flex flex-col items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:flex-row">
          
          {/* Navigation and Social Media Icons */}
          <div className="flex flex-col items-center w-full sm:flex-row sm:justify-between">
            {/* Navigation */}
            <nav className="flex justify-center flex-1 my-4 ml-12 space-x-6 sm:justify-start">
              <NavLink to="/" className="text-lg text-black hover:text-yellow-500">Home</NavLink>
              <NavLink to="/" className="text-lg text-black hover:text-yellow-500">Services</NavLink>
              <NavLink to="/" className="text-lg text-black hover:text-yellow-500">About Us</NavLink>
              <NavLink to="/" className="text-lg text-black hover:text-yellow-500">Contact Us</NavLink>
            </nav>

            {/* Social Media Icons */}
            <div className="flex mt-4 space-x-4 sm:mt-0">
              <a href="https://facebook.com" className="text-lg text-black hover:text-yellow-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-lg text-black hover:text-yellow-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-lg text-black hover:text-yellow-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="flex-shrink-0 ml-3 text-lg text-black">
            <a href="/" className="hover:text-yellow-500">
              <p className='mt-4'>© All rights reserved by Belike Group</p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
