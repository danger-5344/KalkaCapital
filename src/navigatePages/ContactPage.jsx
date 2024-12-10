import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <div>
      {/* Contact Section */}
      <section className=" py-16 bg-gray-50 pt-20">
      <h2 className="text-4xl font-semibold text-center mb-8">Get In Touch With Us</h2>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 ">
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

    {/* Team Section */}
    <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-red-600 mb-8">Meet Our Amazing Team</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <div className="relative mb-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member 1"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-red-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Chief Executive Officer</p>
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <div className="relative mb-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member 2"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-red-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <div className="relative mb-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member 3"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-red-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Robert Brown</h3>
              <p className="text-gray-600">Head of Marketing</p>
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition duration-200"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-red-600 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">What are your business hours?</h3>
              <p className="text-gray-600">Our business hours are Monday to Friday, from 9 AM to 6 PM.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">How can I contact support?</h3>
              <p className="text-gray-600">You can reach out to our support team via email at support@company.com or through our live chat feature on the website.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Do you offer international shipping?</h3>
              <p className="text-gray-600">Yes, we do offer international shipping to many countries. Please check our shipping policy for more details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-400">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h2 className="text-4xl font-semibold text-center mb-8">Other Ways to Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Live Chat */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Live Chat</h3>
              <p className="text-lg text-gray-600">Chat with one of our team members directly on the whatsapp for instant support. We are available 24/7!</p>
            </div>

            {/* Email Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Send Us An Email</h3>
              <p className="text-lg text-gray-600">For any inquiries, feel free to send us an email at contact@company.com, and we will get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ContactPage;
