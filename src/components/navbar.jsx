import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "../assets/logo.jpg"

const Navbar = () => {
  return (
    <nav className="bg-blue-100 py-4">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-12 mr-4" />
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-black hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link to="/admission" className="text-black hover:text-blue-600">Admission</Link>
            </li>
            {/* <li>
              <Link to="/education" className="text-black hover:text-blue-600">Education</Link>
            </li> */}
            <li>
              <Link to="/contact" className="text-black hover:text-blue-600">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className=" flex items-center space-x-2">
          <i className="fas fa-phone-alt"></i>
          <span>Call: +918987991194</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
