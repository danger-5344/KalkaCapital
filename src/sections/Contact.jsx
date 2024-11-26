import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Contact Cards */}
        <div className="space-y-6">
          {/* Phone Card */}
          <div className="group bg-white shadow-md rounded-lg p-6 border w-80 mx-auto transition-transform transform hover:scale-105 overflow-hidden relative">
            <div className="absolute inset-0 bg-red-500 transition-all duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-10 flex items-center space-x-4">
              <div className="bg-gray-100 group-hover:bg-white rounded-full h-12 w-12 flex items-center justify-center transition-colors duration-500">
                <FontAwesomeIcon icon={faPhone} className="text-gray-700 group-hover:text-red-500" />
              </div>
              <div>
                <p className="text-gray-600 group-hover:text-white">Call Anytime</p>
                <p className="text-lg font-semibold text-gray-800 group-hover:text-white">
                  +088 6765 7654 23
                </p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="group bg-white shadow-md rounded-lg p-6 border w-80 mx-auto transition-transform transform hover:scale-105 overflow-hidden relative">
            <div className="absolute inset-0 bg-red-500 transition-all duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-10 flex items-center space-x-4">
              <div className="bg-gray-100 group-hover:bg-white rounded-full h-12 w-12 flex items-center justify-center transition-colors duration-500">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-700 group-hover:text-red-500" />
              </div>
              <div>
                <p className="text-gray-600 group-hover:text-white">Write Email</p>
                <p className="text-lg font-semibold text-gray-800 group-hover:text-white">
                  example@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group bg-white shadow-md rounded-lg p-6 border w-80 mx-auto transition-transform transform hover:scale-105 overflow-hidden relative">
            <div className="absolute inset-0 bg-red-500 transition-all duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-10 flex items-center space-x-4">
              <div className="bg-gray-100 group-hover:bg-white rounded-full h-12 w-12 flex items-center justify-center transition-colors duration-500 ">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-700 group-hover:text-red-500 " />
              </div>
              <div>
                <p className="text-gray-600 group-hover:text-white">Office Location</p>
                <p className="text-lg font-semibold text-gray-800 group-hover:text-white">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
       

        {/* Right Side: Map */}
        <div className="relative">
          <iframe
            title="Office Location"
            className="w-full h-96 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509322!2d144.95373531531672!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d8f8f6eb5a6!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1633440424087!5m2!1sen!2sau"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
