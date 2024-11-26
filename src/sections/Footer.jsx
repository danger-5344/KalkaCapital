import React from "react";
const Footer = () => {
    return (
      <footer className="bg-footer text-gray-800 p-0 m-0 py-8 block">
        <div className="max-w-7xl mx-auto px-4 p-0 m-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            
            {/* Brand Section */}
            <div>
              <h4 className="font-bold text-2xl text-red-500">KalkaCapital</h4>
              <p className="mt-2 text-white">Connecting you to the best solutions.</p>
            </div>
            
            {/* Quick Links Section */}
            <div>
              <h4 className="font-bold text-xl text-red-500">Quick Links</h4>
              <ul className="mt-2 space-y-1">
                <li><a href="#home" className="text-white hover:text-red-600">Home</a></li>
                <li><a href="#services" className="text-white hover:text-red-600">Services</a></li>
                <li><a href="#about" className="text-white hover:text-red-600">About</a></li>
                <li><a href="#contact" className="text-white hover:text-red-600">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Us Section */}
            <div>
              <h4 className="font-bold text-xl text-red-500">Contact Us</h4>
              <p className="mt-2 text-white">Email: info@kalacapital.com</p>
              <p className="text-white">Phone: +123 456 7890</p>
            </div>
          </div>
          
          {/* Footer Bottom Section */}
          <div className="mt-8 text-center text-gray-300 text-sm font-bold">
            <p>&copy; {new Date().getFullYear()} KalkaCapital. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  