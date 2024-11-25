const ServiceCard = ({ service, desc, color, icon }) => {
  return (
    <div
      className="card max-w-sm flex flex-col items-center m-6 transition-transform transform hover:scale-105 group"
      key={color}
    >
      <div
        className={`container-card transition  shadow-lg rounded-2xl p-6 relative`}
      >
        {/* Icon Section */}
        <div className="icon-container flex justify-between mb-4">
          <img
            src={icon}
            alt={`${service} icon`}
            className="w-14 h-14 rounded-lg group-hover:shadow-lg"
          />
        </div>
        {/* Title and Description */}
        <p className="card-title text-xl font-bold mt-2 text-red-800">
          {service.toUpperCase()}
        </p>
        <p className="card-description text-base text-gray-700 mt-4 leading-relaxed">
          {desc}
        </p>
        {/* Call-to-Action Button */}
        <div className="mt-10">
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
