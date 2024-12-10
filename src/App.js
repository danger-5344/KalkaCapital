import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./sections/Header";
import HomePage from "./navigatePages/HomePage";
import AboutUs from "./navigatePages/AboutUs";
import Footer from "./sections/Footer";
import LoanPage from "./navigatePages/Loan";
import InvestmentPage from "./navigatePages/InvestmentPage"
import ContactPage from "./navigatePages/ContactPage";
import ConstructionPage from "./navigatePages/ConstructionPage"
import BusinessConsultancyPage from "./navigatePages/BusinessPage";


export default function MyApp() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/investment" element={<InvestmentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/business" element={<BusinessConsultancyPage />} />

         {/* All sections on one page */}
      </Routes>
      <Footer/>
    </Router>
  );
}
