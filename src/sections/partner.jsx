import React from 'react';
import hdfc from "../assests/Images/hdfc-bank-logo.svg";
import axis from "../assests/Images/axis-bank-logo-1.svg";
import sbi from "../assests/Images/state-bank-of-india-logo.svg";
import punjab from "../assests/Images/punjab-national-bank.svg";

const PartnerWithUs = () => {
  return (
    <section className="relative  py-16 overflow-hidden block">
      {/* Decorative Background SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 319"
        >
          <path
            fill="#444"
            fillOpacity="1"
            d="M 37 251 C 83 178 61 163 236 181 L 1439 301 L 1440 320 L 1392 320 C 1344 320 1248 320 1152 320 C 1056 320 960 320 864 320 C 768 320 672 320 576 320 C 480 320 384 320 288 320 C 192 320 96 320 48 320 L 0 320 Z"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Our Trusted Partners
        </h2>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          {/* Logo 1 */}
          <div className="flex justify-center transform transition hover:scale-110">
            <img
              src={hdfc}
              alt="HDFC Bank"
              className="h-14 object-contain"
            />
          </div>
          {/* Logo 2 */}
          <div className="flex justify-center transform transition hover:scale-110">
            <img
              src={axis}
              alt="Axis Bank"
              className="h-14 object-contain"
            />
          </div>
          {/* Logo 3 */}
          <div className="flex justify-center transform transition hover:scale-110">
            <img
              src={sbi}
              alt="State Bank of India"
              className="h-14 object-contain"
            />
          </div>
          {/* Logo 4 */}
          <div className="flex justify-center transform transition hover:scale-110">
            <img
              src={punjab}
              alt="Punjab National Bank"
              className="h-14 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
