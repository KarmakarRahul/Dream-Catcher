// src/pages/Contact.jsx
import React from 'react';
import ContactUs from '../components/contactUs';
// import EnquiryForm from '../components/enquiry';
import Navbar from '../components/navbar';
import FooterComponent from '../components/footer';


const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ContactUs />
    </div>
    <FooterComponent />
    </>
  );
};

export default Contact;