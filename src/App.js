import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Footer from './sections/Footer';





export default function MyApp() {
  return (

    <div>
      <Header />
      <Hero />
      <Services/>
      <About/>
      <Footer />
    </div>
  );
}