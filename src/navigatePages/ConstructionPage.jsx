import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faHammer, faBuilding, faHome } from '@fortawesome/free-solid-svg-icons';

// ConstructionCard Component
const ConstructionCard = ({ icon, percentage, service, desc, duration, index }) => (
  <div
    key={index}
    className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-64 transform hover:scale-105 transition-all mb-4"
  >
    <div className="flex items-center space-x-4">
      <FontAwesomeIcon icon={icon} className="text-red-600 w-12 h-12 hover:text-red-800" />
      {/* <p className="text-2xl font-semibold text-gray-500">{percentage}</p> */}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mt-4">{service}</h3>
    <p className="text-gray-600 mt-2">{desc}</p>
    {/* <p className="text-sm font-medium text-gray-500 mt-4">{duration}</p> */}
  </div>
);

// ConstructionPage Component
const ConstructionPage = () => {
  const serviceData = [
    {
      icon: faTools,
      percentage: '90%',
      service: 'Project Management',
      desc: 'Professional project management to ensure your construction runs smoothly, on time, and on budget.',
      duration: 'Approx. 6 months',
    },
    {
      icon: faHammer,
      percentage: '85%',
      service: 'Renovation & Remodeling',
      desc: 'Transform your space with expert renovations, making your vision come to life with our remodeling services.',
      duration: 'Approx. 4 months',
    },
    {
      icon: faBuilding,
      percentage: '95%',
      service: 'Design Consultation',
      desc: 'Collaborate with our team of designers to create custom construction plans and bring your ideas to reality.',
      duration: 'Approx. 2 months',
    },
    {
      icon: faHome,
      percentage: '80%',
      service: 'Sustainable Construction',
      desc: 'Build a more sustainable future with eco-friendly materials and energy-efficient construction techniques.',
      duration: 'Ongoing',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-12 pt-20">
        
        {/* Available Services Section */}
        <section>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Construction Services</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {serviceData.map((service, index) => (
              <ConstructionCard
                key={index}
                index={index}
                icon={service.icon}
                percentage={service.percentage}
                service={service.service}
                desc={service.desc}
                duration={service.duration}
              />
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Your Future Together</h2>
          <p className="text-lg leading-relaxed mb-6">
            Ready to bring your construction ideas to life? Our expert team is here to help you every step of the way, from planning to completion.
          </p>
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
            Get Your Free Consultation
          </button>
        </section>

        {/* Featured Offers Section */}
        <section>
  <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Special Offers</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white text-gray-700 rounded-lg shadow-2xl p-6 text-center transform hover:scale-105 transition-all">
      <h3 className="text-2xl font-semibold text-gray-900">Free Site Assessment</h3>
      <p className="mt-4 text-lg text-gray-600">Get a free site assessment with one of our experts to understand your construction needs.</p>
      <button className="bg-red-500 text-white px-8 py-3 mt-6 rounded-lg font-semibold shadow-md hover:bg-red-600 transition">
        Book Now
      </button>
    </div>
    <div className="bg-white text-gray-700 rounded-lg shadow-2xl p-6 text-center transform hover:scale-105 transition-all">
      <h3 className="text-2xl font-semibold text-gray-900">Discounted Design Plans</h3>
      <p className="mt-4 text-lg text-gray-600">Enjoy a 20% discount on all design plans when you sign up for our construction services.</p>
      <button className="bg-red-500 text-white px-8 py-3 mt-6 rounded-lg font-semibold shadow-md hover:bg-red-600 transition">
        Get Offer
      </button>
    </div>
    <div className="bg-white text-gray-700 rounded-lg shadow-2xl p-6 text-center transform hover:scale-105 transition-all ">
      <h3 className="text-2xl font-semibold text-gray-900">Free Consultation</h3>
      <p className="mt-4 text-lg text-gray-600">Book a free consultation to discuss your construction project and get expert advice on your next steps.</p>
      <button className="bg-red-500 text-white px-8 py-3 mt-6 rounded-lg font-semibold shadow-md hover:bg-red-600 transition">
        Schedule Now
      </button>
    </div>
  </div>
</section>



      </main>

    </div>
  );
};

export default ConstructionPage;
