import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faBriefcase, faGraduationCap, faHardHat } from "@fortawesome/free-solid-svg-icons";

const serviceData = [
  {
    percentage: "9.35%",
    service: "Personal Loan",
    desc: "Stay turned into the world of finance & business.",
    duration: "20 Months Instalment",
    icon: faHandshake, // Font Awesome icon for this service
  },
  {
    percentage: "10.2%",
    service: "Business Loan",
    desc: "Stay turned into the world of finance & business.",
    duration: "20 Months Instalment",
    icon: faBriefcase, // Font Awesome icon for this service
  },
  {
    percentage: "28.3%",
    service: "Education Loan",
    desc: "Stay turned into the world of finance & business.",
    duration: "20 Months Instalment",
    icon: faGraduationCap, // Font Awesome icon for this service
  },
  {
    percentage: "28.3%",
    service: "Construction",
    desc: "Stay turned into the world of finance & business.",
    duration: "20 Months Instalment",
    icon: faHardHat, // Font Awesome icon for this service
  },
  
];

function Services() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-12 relative">
    

      
      <div className=" container mx-auto flex flex-col lg:flex-row items-start space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Section: Cards */}
        <div className=" w-full lg:w-1/2 relative">
          {/* Cards Wrapper */}
          <div className=" relative lg:h-[500px] ">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className={`bg-white   shadow-lg rounded-lg p-6 w-full lg:w-64 transform  hover:scale-105 transition-all mb-4 lg:mb-0 ${
                  index % 2 === 0 ? "lg:left-[47%]" : "lg:left-0"
                } lg:absolute `}
                style={{
                  top: `${index * 125}px`, // Adjust the vertical spacing for large screens
                  zIndex: serviceData.length - index, // Maintain proper stacking
                }}
              >
                <div className="flex items-center space-x-4 ">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-red-600 w-12 h-12 hover:text-red-600"
                  />
                  <p className="text-2xl font-semibold text-gray-500">
                    {service.percentage}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  {service.service}
                </h3>
                <p className="text-gray-600 mt-2">{service.desc}</p>
                <p className="text-sm font-medium text-gray-500 mt-4">
                  {service.duration}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="w-full lg:w-1/2  flex flex-col lg:flex-row items-center">
          <div className="lg:mt-20 w-11/12">
          <h2 className="text-xl font-extrabold text-red-500 tracking-widest">
            Service We Provide
          </h2>
          <h3 className="text-5xl font-bold text-gray-800 mt-4">
            We provide awesome services, it’s here.
          </h3>
          <p className="text-gray-600 mt-6 leading-relaxed">
            We are here to help you when you need your financial support, then
            we are help you.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in a some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition-all transform hover:scale-105 focus:outline-none ">
              View More
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
