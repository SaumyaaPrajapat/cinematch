import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import cinematch from "./../asset/cinematch.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center items-center mb-3">
          <div>
            <img src={cinematch} alt="cinematch" className="w-62 h-12" />
          </div>
        </div>
        <div className="flex justify-center">
          {" "}
          {/* Centering container */}
          <div className="flex items-center mb-5">
            <div className="flex items-center ml-12">
              <ul className="flex items-center text-gray-300">
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfN6tJzhvWGc55EQjCeGuB2tjf6iUd44hSLScj1QN5n_A5C9Q/viewform?usp=pp_url"
                    className="hover:text-white"
                    target="_blank"
                  >
                    Feedback
                  </a>
                </li>
                <li className="ml-4">
                  <a href="" className="hover:text-white">
                    Help
                  </a>
                </li>
                <li className="ml-4">
                  <a href="" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <h1 className="text-gray-500 ml-10">|</h1>
            <div className="flex items-center mr-12">
              <span className="text-gray-300 ml-10 mr-2">FOLLOW ON:</span>
              <a
                href="#"
                className="text-black bg-gray-400 rounded-full p-2 hover:bg-gray-800 transition duration-500"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-black bg-gray-400 rounded-full p-2 hover:bg-gray-800 transition duration-500 ml-2"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-300">
          <p>@2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
