import TestimonialCard from "../components/TestimonialCard";
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
    rating: 5, // 5 stars
  },
  {
    name: "Jane Smith",
    designation: "Marketing Manager, Creative Co.",
    image: avatar2,
    message:
      "I loved the attention to detail and the clear communication throughout the project. Truly a pleasure to work with!",
    rating: 4, // 4 stars
  },
  {
    name: "Carlos Ruiz",
    designation: "Freelance Developer",
    image: avatar3,
    message:
      "Great experience! The tools provided made my job much easier, and the support team was always there to help.",
    rating: 5, // 5 stars
  },
];

const Testimonials = () => {
  return (
    <section className="my-10">
      <h2 className="section-title my-5">What others say about us.</h2>
      <div className="container p-5">
        <div className="testimonials-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
