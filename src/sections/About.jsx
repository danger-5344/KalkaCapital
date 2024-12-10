import React from "react";
// Adjust the path as needed

function About() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background Curves */}
      <div className="absolute inset-0">
      <svg
    className="absolute top-0 left-0 w-full opacity-20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 900"
  >
    <path
      fill="#ef4444" // Red
      fillOpacity="1"
      d="M -1 27 L 17 38 C 93 74 354 -77 841 65 C 480 235 600 213 990 93 C 840 160 960 128 1080 138.7 C 1200 149 1320 203 1392 519 L 1437 734 L 1440 0 L 1380 0 C 1320 0 1200 0 1080 0 C 960 0 840 0 720 0 C 600 0 480 0 360 0 C 240 0 120 0 60 0 L 0 0 Z"
    ></path>

    
  </svg>
  <svg
          className="absolute top-0 left-0 w-full h-auto opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
        >
          <path
            fill="#d1d5db"
            fillOpacity="0.7"
            d="M0,64L60,80C120,96,240,128,360,160C480,192,600,224,720,208C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug lg:leading-tight">
            Why we are starting our company?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We are here to help you when you need your financial support, then
            we are here to help you.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            We all know how hard it can be to make a site look like the demo, so
            to make your start into the world of as easy as possible, we have
            included the demo content from the showcase site. Simply import the
            sample files we ship with the theme, and the core structure for your
            site is already built.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            We are a leading pay loan financial company. We are here to help
            you when you need financial support.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            
            <button className="ml-4 px-6 py-3 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition-all transform hover:scale-105 focus:outline-none">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative">
            <img
              src="https://wp.ditsolution.net/payloan/wp-content/uploads/2021/09/2-2.png"
              alt="About Us"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500"
            />
            <div className="absolute -z-10 -top-10 -right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
