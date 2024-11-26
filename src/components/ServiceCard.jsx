
const ServiceCard = ({ service, desc, color, icon }) => {
  return (
    <div
      className="card flex flex-col items-center justify-center p-6 transition-transform transform hover:scale-105"
      key={color}
    >
      <div
        className={`container-card bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 shadow-lg rounded-2xl p-6 relative`}
      >
        {/* Icon Section */}
        <div className="icon-container flex justify-center mb-4">
          <img
            src={icon} // Service-specific icon
            alt={`${service} icon`}
            className="w-16 h-16 rounded-full"
          />
        </div>
        {/* Title and Description */}
        <p className="card-title text-xl font-bold text-center mt-2 text-blue-800">
          {service}
        </p>
        <p className="card-description text-base text-center text-gray-700 mt-4 leading-relaxed">
          {desc}
        </p>
        {/* Call-to-Action Button */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:from-blue-600 hover:to-blue-700 hover:-translate-y-1"
          >
            Book A Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
