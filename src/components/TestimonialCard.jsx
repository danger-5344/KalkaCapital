const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
      {/* Profile Section */}
      <div className="profile flex items-center mb-4 key" key={testimonial.name}>
        <img
          src={testimonial.image} // Profile picture
          alt={`${testimonial.name}'s profile`}
          className="w-16 h-16 rounded-full border-2 border-green-500"
        />
        <div className="ml-4">
          <p className="name font-bold text-lg text-gray-800">
            {testimonial.name}
          </p>
          <p className="designation text-sm text-gray-600">
            {testimonial.designation}
          </p>
        </div>
      </div>
      {/* Testimonial Content */}
      <p className="testimonial-content text-gray-700 text-base italic leading-relaxed">
        "{testimonial.message}"
      </p>
      {/* Optional Rating Section */}
      <div className="rating flex items-center mt-4">
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.539 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.34 8.401c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.974z"></path>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
