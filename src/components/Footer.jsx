import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12 mt-12">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* First Column: TravelGo Name and Description */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">TravelGo</h1>
                    <p className="text-lg mb-6 ml-6">
                        Explore the world with TravelGo, your ultimate guide to discovering the best hotels, destinations, and travel experiences.
                    </p>
                </div>

                {/* Second Column: Quick Links */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-4">
                        <li><a href="#blogs" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
                        }} className="hover:text-yellow-400">Blogs</a></li>
                        <li><a href="/hotels"className="hover:text-yellow-400">Hotels</a></li>
                        <li><a href="/about-us" className="hover:text-yellow-400">About Us</a></li>
                    </ul>
                </div>

                {/* Third Column: Newsletter Subscription and Social Media Icons */}
                <div className='flex flex-col'>
                    <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
                    <div className="flex mb-6">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-2 rounded-lg bg-white text-gray-800"
                        />
                        <button className="bg-white text-blue-800 px-6 py-2 rounded-r-md hover:bg-blue-500 hover:text-white ml-2">
                            Subscribe
                        </button>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com" className="hover:text-yellow-400">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" className="hover:text-yellow-400">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://www.instagram.com" className="hover:text-yellow-400">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.linkedin.com" className="hover:text-yellow-400">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-12">
                <p>&copy; 2025 TravelGo. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
