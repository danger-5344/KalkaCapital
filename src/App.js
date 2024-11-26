import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Footer from "./sections/Footer";
import PartnerWithUs from "./sections/partner";
import ContactSection from "./sections/Contact";
import  FinancialGoalSection from "./sections/FinancialGoalSection";

export default function MyApp() {
  return (
    <div>
      <Header />
     
      <Hero />
      <About />
      
      <Services />
      
      <Testimonials />
      <FinancialGoalSection/>
      <ContactSection/>
      <PartnerWithUs/>
      <Footer />
    </div>
  );
}
