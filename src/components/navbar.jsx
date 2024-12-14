import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Logo from "/assets/logo.jpg";

const Navbar = () => {
  const Logo = "/assets/logo.jpg";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-12 mr-4" />
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link to="/" className="text-black hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link to="/admission" className="text-black hover:text-blue-600">Admission</Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:text-blue-600">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-phone-alt hidden md:block"></i>
          {/* Enable calling functionality by using tel: link */}
          <a href="tel:+918987991194" className="hidden md:block text-black hover:text-blue-600">
            Call: +91 8825366150
          </a>
          <button className="md:hidden text-black focus:outline-none" onClick={toggleMenu}>
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-100">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/" className="text-black hover:text-blue-600" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/admission" className="text-black hover:text-blue-600" onClick={toggleMenu}>Admission</Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:text-blue-600" onClick={toggleMenu}>Contact us</Link>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone-alt"></i>
                {/* Enable calling functionality for mobile view */}
                <a href="tel:+918987991194" className="text-black hover:text-blue-600">
                  Call: +91 8987991194
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
