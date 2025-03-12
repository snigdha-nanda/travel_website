import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">TravelGo</Link>
                <nav>
                    <ul className="flex space-x-6 text-decoration-none">
                        <li><Link to="#" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
                        }}>Blogs</Link></li>
                        <li><Link to="/hotels">Hotels</Link></li>
                        <li><Link to="/favourites">Favourites</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
