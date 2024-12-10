import React from "react";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import FinancialGoalSection from "../sections/FinancialGoalSection";
import ContactSection from "../sections/Contact";
import PartnerWithUs from "../sections/partner";
import Tools from "../sections/Tools";


const HomePage = () => {
   



    return (
        <div>

            {/* Page Sections */}
            <Hero />

            <About />

            <Services />
            <Tools/>
            <Testimonials />

            <FinancialGoalSection />
           

            <ContactSection />

            <PartnerWithUs />

        </div>
    );
};

export default HomePage;
