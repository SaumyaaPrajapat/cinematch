import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import cinematch from "./../../src/asset/cinematch.png";
import back from "./../../src/asset/back.png";

const FirstPage = () => {
  return (
    <div>
      <div className="relative">
        <Header />
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover "
            src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="banner"
          />
        </div>
        <div className="flex justify-center items-center h-screen">
          <div className="text-white text-center p-8 bg-black bg-opacity-65 z-10">
            <img className="w-70 mx-auto" src={cinematch} alt="cinematch" />
            <h4 className="text-2xl text-white mb-5 font-bold">
              Dive into a universe of unlimited movies, TV shows, and more,
              curated to match your every mood and emotion.
            </h4>
            <h6 className="text-lg mt-4">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Email address"
                className="bg-transparent border border-white text-white px-4 py-2 rounded"
              />
              <button className="bg-blue-800 text-white px-6 py-2 rounded ml-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
