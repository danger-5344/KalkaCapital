import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Footer from "./sections/Footer";

export default function MyApp() {
  return (
    <div>
      <Header />
      <main>
        <section className="h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to My App!
          </h1>
        </section>
      </main>
      <Hero />
      <About />
      <hr />
      <Services />
      <hr />
      <Testimonials />
      <Footer />
    </div>
  );
}
