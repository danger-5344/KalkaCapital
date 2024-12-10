import React from 'react';
import hdfc from "../assests/Images/hdfc-bank-logo.svg";
import axis from "../assests/Images/axis-bank-logo-1.svg";
import sbi from "../assests/Images/state-bank-of-india-logo.svg";
import punjab from "../assests/Images/punjab-national-bank.svg";

const PartnerWithUs = () => {
  return (
    <section className="relative  py-16 overflow-hidden block bg-gray-50">
      {/* Decorative Background SVG */}
      

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
