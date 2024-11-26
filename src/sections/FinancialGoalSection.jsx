import React from "react";

const GradientSection = () => {
  return (
    <section className="relative py-16 px-3">
      {/* SVG Background with Drop Shadow */}
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="customDropShadow">
              <feDropShadow
                dx="12"
                dy="14"
                stdDeviation="8"
                floodColor="rgba(0, 0, 0, 0.2)"
              />
            </filter>
          </defs>
          <rect
            x="1.5%"
            y="20%"
            width="100%"
            height="68%"
            fill="#E4E5F1"
            filter="url(#customDropShadow)"
            rx="20"
            ry="20"
          />
        </svg>
      </div>

      {/* Content Section */}
      <div className="max-w-8xl mx-auto rounded-tl-3xl rounded-bl-3xl bg-gradient-to-br from-red-500 via-red-500 to-red-400 overflow-hidden relative">
        <div className="p-12 flex flex-col md:flex-row items-center md:items-center justify-between">
          {/* Text Content */}
          <div className="text-left max-w-2xl p-5">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              We're all about helping you reach your next financial goal.
            </h1>
          </div>

          {/* Button */}
          <a
            href=""
            className="inline-block bg-white text-red-500 font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 hover:text-matt-red-300 transition duration-300"
          >
            Contact Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GradientSection;
