import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faBriefcase, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const BusinessConsultancyPage = () => {
  const serviceData = [
    {
      icon: faChalkboardTeacher,
      percentage: '95%',
      service: 'Strategic Consulting',
      desc: 'Our team of experts helps you develop effective strategies to drive growth and increase operational efficiency.',
      duration: 'Ongoing support',
    },
    {
      icon: faBriefcase,
      percentage: '85%',
      service: 'Business Optimization',
      desc: 'We provide actionable insights to streamline your operations and enhance your business processes.',
      duration: '3-6 months',
    },
    {
      icon: faUsers,
      percentage: '90%',
      service: 'Team Building',
      desc: 'Strengthen your team with our customized leadership and team-building programs to foster collaboration.',
      duration: 'Workshops & ongoing support',
    },
    {
      icon: faLightbulb,
      percentage: '88%',
      service: 'Innovation Consulting',
      desc: 'Get guidance on leveraging cutting-edge technologies to boost innovation and create competitive advantages.',
      duration: 'Project-based',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white text-center py-16 pt-20">
        <h1 className="text-4xl font-bold mb-4">Business Consultancy Services</h1>
        <p className="text-lg mb-6">Transform your business with expert consulting services that drive success and growth.</p>
        <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
          Get Your Free Consultation
        </button>
      </section>

      {/* Our Services Section */}
      <section className="container mx-auto px-6 py-12 space-y-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-white text-gray-700 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all"
            >
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={service.icon} className="text-red-600 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{service.service}</h3>
              <p className="mt-4 text-lg text-gray-600">{service.desc}</p>
              <p className="mt-2 text-sm font-medium text-gray-500">{service.duration}</p>
              {/* <p className="mt-2 text-xl font-bold text-gray-800">{service.percentage}</p> */}
            </div>
          ))}
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center m-10 ">
        <h2 className="text-3xl font-bold mb-4">Let’s Grow Your Business Together</h2>
        <p className="text-lg leading-relaxed mb-6">
          Ready to take your business to the next level? Our expert consultants are here to guide you every step of the way.
        </p>
        <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </section>

      {/* Special Offers Section */}
      <section className='m-10'>
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Special Offers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white text-gray-700 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold text-gray-900">Free Business Assessment</h3>
            <p className="mt-4 text-lg text-gray-600">Book a free consultation with our experts to assess your current business needs.</p>
            <button className="bg-red-500 text-white px-8 py-3 mt-6 rounded-lg font-semibold shadow-md hover:bg-red-600 transition">
              Book Now
            </button>
          </div>
          <div className="bg-white text-gray-700 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold text-gray-900">20% Off on Strategic Plans</h3>
            <p className="mt-4 text-lg text-gray-600">Get a 20% discount on our tailored strategic consulting services.</p>
            <button className="bg-red-500 text-white px-8 py-3 mt-6 rounded-lg font-semibold shadow-md hover:bg-red-600 transition">
              Get Offer
            </button>
          </div>
          <div className="bg-white text-gray-700 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold text-gray-900">Free Team Building Workshop</h3>
            <p className="mt-4 text-lg text-gray-600">Join our free team-building workshop and enhance your team's collaboration skills.</p>
            <button className="bg-red-500 text-white px-8 py-3 mt-6 rounded-lg font-semibold shadow-md hover:bg-red-600 transition">
              Join Now
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default BusinessConsultancyPage;
