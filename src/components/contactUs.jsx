  // src/components/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
    return (
        <div className="w-4/5 mx-auto flex flex-col items-center">
            <div className="w-full flex flex-col md:flex-row h-[500px]">
                <div className="flex-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.868111119677!2d85.3682642!3d23.9980902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49c141be4386f:0xf47a5589f8d246!2sPTC+Chowk,+Suresh+Colony,+Hazaribagh,+Jharkhand+825301!5e0!3m2!1sen!2sin!4v1642119445821!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        title="Location"
                        className="w-full h-full border-0"
                    ></iframe>
                </div>
                <div className="flex-1 p-6 bg-white shadow-lg flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 relative">
                            Contact With Us
                            <span className="block w-12 h-1 bg-blue-500 mt-2"></span>
                        </h2>
                        <p className="text-gray-600 mb-6">
                            If you have any questions please feel free to contact with us.
                        </p>
                    </div>
                    <form>
                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="w-full md:w-1/2 p-3 border border-gray-300 rounded mb-4 md:mb-0"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full md:w-1/2 p-3 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                required
                                className="w-full md:w-1/2 p-3 border border-gray-300 rounded mb-4 md:mb-0"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="w-full md:w-1/2 p-3 border border-gray-300 rounded"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your enquiry details here..."
                            required
                            className="w-full p-3 border border-gray-300 rounded mb-4 h-32"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            Submit Enquiry 
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row justify-between w-full">
                <div className="flex-1 bg-blue-500 text-white p-6 rounded-lg m-2 flex items-center">
                    <i className="fa fa-phone text-2xl mr-4"></i>
                    <div>
                        <p>7488828784</p>
                        <p>dreamcatchers.com</p>
                    </div>
                </div>
                <div className="flex-1 bg-blue-500 text-white p-6 rounded-lg m-2 flex items-center">
                    <i className="fa fa-map-marker text-2xl mr-4"></i>
                    <div>
                        <p>Near PTC Chowk</p>
                        <p>Canary Hill Road, Hazaribagh</p>
                    </div>
                </div>
                <div className="flex-1 bg-blue-500 text-white p-6 rounded-lg m-2 flex items-center">
                    <i className="fa fa-clock-o text-2xl mr-4"></i>
                    <div>
                        <p>Mon - Fri: 8am - 10am</p>
                        <p>Saturday, Sunday Closed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;