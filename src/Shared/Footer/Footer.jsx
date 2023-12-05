import React from "react";
import logo from "../../assets/logo-d.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">
          <img className="w-20 mx-auto py-4" src={logo} alt="" />
        </p>
        <p className="text-sm mb-4">Your passport to unforgettable journeys.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Destinations
          </a>
          <a href="#" className="hover:text-gray-300">
            Packages
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v6h-2z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-11h4v2H9zm4 4H9v6h4v-6z" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy; 2023 ExploreWander. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
