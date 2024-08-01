import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        purpose: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://yvoj2fs61g.execute-api.ap-south-1.amazonaws.com/p5/dream_catchers_enquiry', formData);
            console.log(response);
            if (response.status === 200) {
                toast.success('Enquiry sent successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    purpose: '',
                    message: ''
                });
            }
        } catch (error) {
            toast.error('Error sending enquiry. Please try again.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="w-11/12 lg:w-4/5 mx-auto flex flex-col items-center">
            <ToastContainer />
            <div className="w-full flex flex-col md:flex-row h-auto md:h-[500px] mb-8">
                <div className="flex-1 border-4 border-blue-500 rounded-lg overflow-hidden mb-6 md:mb-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.868111119677!2d85.3682642!3d23.9980902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49c141be4386f:0xf47a5589f8d246!2sPTC+Chowk,+Suresh+Colony,+Hazaribagh,+Jharkhand+825301!5e0!3m2!1sen!2sin!4v1642119445821!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        title="Location"
                        className="w-full h-64 md:h-full border-0"
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
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 mb-4 md:mb-0"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 mb-4 md:mb-0"
                            />
                            <input
                                type="text"
                                name="purpose"
                                placeholder="Purpose"
                                required
                                value={formData.purpose}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your enquiry details here..."
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 mb-4 h-32"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-500 text-white hover:bg-blue-600 transition"
                        >
                            Submit Enquiry
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center bg-blue-500 text-white p-6 rounded-lg">
                    <FaPhone className="text-2xl mr-4" />
                    <div>
                        <p className="font-semibold">Call Us</p>
                        <p>8987991194</p>
                        <p>7488828784</p>
                    </div>
                </div>
                <div className="flex items-center bg-blue-500 text-white p-6 rounded-lg">
                    <FaMapMarkerAlt className="text-2xl mr-4" />
                    <div>
                        <p className="font-semibold">Our Location</p>
                        <p>Near PTC Chowk</p>
                        <p>Canary Hill Road, Hazaribagh</p>
                    </div>
                </div>
                <div className="flex items-center bg-blue-500 text-white p-6 rounded-lg">
                    <MdEmail className="text-2xl mr-4" />
                    <div className="break-words">
                        <p className="font-semibold">Email Us</p>
                        <p>info.dreamcatchersplay@gmail.com</p>
                        <p>www.dreamcatcherplay.in</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
