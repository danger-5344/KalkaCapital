import React from "react";
import avatar1 from "../assests/avatar/avatar-1.png";
import avatar2 from "../assests/avatar/avatar-2.png";
import avatar3 from "../assests/avatar/avatar-3.png";

const testimonials = [
  {
    name: "Kamley Doe",
    designation: "CEO, Tech Solutions",
    image: avatar1,
    message:
      "This service exceeded my expectations! The team was professional, and the results were fantastic. Highly recommend.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    designation: "Marketing Manager, Creative Co.",
    image: avatar2,
    message:
      "I loved the attention to detail and the clear communication throughout the project. Truly a pleasure to work with!",
    rating: 4,
  },
  {
    name: "Carlos Ruiz",
    designation: "Freelance Developer",
    image: avatar3,
    message:
      "Great experience! The tools provided made my job much easier, and the support team was always there to help.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          What Others Say About Us
        </h2>
        <p className="text-gray-600 mt-2">
          Hear from our satisfied clients and their experiences.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group flip perspective w-full max-w-sm mx-auto"
          >
            <div className="relative w-full h-72 transition-transform duration-700 transform group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center backface-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-20 h-20 mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.designation}</p>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-red-500 text-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center rotate-y-180 backface-hidden">
                <p className="italic mb-4">{`"${testimonial.message}"`}</p>
                <div className="flex mt-2 space-x-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={starIndex < testimonial.rating ? "#FFF" : "#F87171"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.658 5.092a1 1 0 00.95.69h5.356c.969 0 1.371 1.24.588 1.81l-4.33 3.17a1 1 0 00-.364 1.118l1.658 5.093c.3.921-.755 1.688-1.54 1.118l-4.33-3.17a1 1 0 00-1.175 0l-4.33 3.17c-.785.57-1.84-.197-1.54-1.118l1.658-5.093a1 1 0 00-.364-1.118l-4.33-3.17c-.783-.57-.381-1.81.588-1.81h5.356a1 1 0 00.95-.69l1.658-5.092z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
