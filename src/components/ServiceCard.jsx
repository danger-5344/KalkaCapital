const ServiceCard = ({ service, desc, color, icon }) => {
  return (
    <div
      className="card flex flex-col items-center justify-center m-6 transition-transform transform hover:scale-105 rotate-2 hover:rotate-0   "
      key={color}
    >
      <div
        className={`container-card bg-gradient-to-br from-red-100 via-red-200 to-red-500 hover:bg-red-500 hover:bg-gradient-to-br hover:from-red-300 hover:to-red-500 transition  shadow-lg rounded-2xl p-6 relative`}
      >
        {/* Icon Section */}
        <div className="icon-container flex justify-center mb-4">
          <img
            src={icon} 
            alt={`${service} icon`}
            className="w-50 h-50"
          />
        </div>
        {/* Title and Description */}
        <p className="card-title text-xl font-bold text-center mt-2 text-red-800">
          {service.toUpperCase()}
        </p>
        <p className="card-description text-base text-center text-gray-700 mt-4 leading-relaxed">
          {desc}
        </p>
        {/* Call-to-Action Button */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="bg-gradient-to-r from-red-500 to-red-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:from-red-600 hover:to-red-700 hover:-translate-y-1"
          >
            Book A Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
