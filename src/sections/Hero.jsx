import React from "react";
import icon from "../assests/Images/3d-rendering-financial-neon-bull.jpg";

function Hero() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background Curves */}
      <div className="absolute inset-0">
        {/* Layer 1 */}
        <svg
          className="absolute top-0 left-0 w-full h-auto opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#d1d5db"
            fillOpacity="1"
            d="M0,96L60,122.7C120,149,240,203,360,218.7C480,235,600,213,720,186.7C840,160,960,128,1080,138.7C1200,149,1320,203,1380,229.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        {/* Layer 2 */}
        <svg
          className="absolute top-0 left-0 w-full h-auto opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f87171"
            fillOpacity="0.7"
            d="M0,64L60,80C120,96,240,128,360,160C480,192,600,224,720,208C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        {/* Bottom Layer */}
        <svg
          className="absolute bottom-0 left-0 w-full h-auto opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#9ca3af"
            fillOpacity="1"
            d="M0,256L60,234.7C120,213,240,171,360,165.3C480,160,600,192,720,213.3C840,235,960,245,1080,224C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Section: Text and Button */}
        <div
          className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug lg:leading-tight">
            The right
            <span className="text-red-500"> decision</span> <br /> at the right
            time.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We are here to help you when you need financial support, and we're
            here for you.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="px-6 py-3 bg-red-500 text-white rounded-md shadow-lg hover:bg-red-600 transition-all transform hover:scale-105 focus:outline-none">
              Get Started
            </button>
            <button className="ml-4 px-6 py-3 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300 transition-all transform hover:scale-105 focus:outline-none">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section: Curved Image */}
        <div
          className="w-full lg:w-1/2 flex justify-center relative"
          data-aos="fade-left"
        >
          <div className="relative">
            {/* Curved Image */}
            <img
              src={ icon }
              alt="Curved Design"
              className="rounded-full shadow-xl transform hover:scale-105 transition-all duration-500"
            />
            {/* Animated Background Circle */}
            <div className="absolute -z-10 -top-10 -right-10 w-96 h-96 bg-red-200 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
    </section>
    
  );
}

export default Hero;
