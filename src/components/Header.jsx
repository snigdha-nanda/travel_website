import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const [favouriteCount, setFavouriteCount] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const favourite = JSON.parse(localStorage.getItem("favourites")) || [];
        setFavouriteCount(favourite.length);
    }, []);

    const handleBlogClick = (e) => {
        e.preventDefault();

        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    TravelGo
                </Link>
                <nav>
                    <ul className="flex space-x-6 text-decoration-none">
                        <li>
                            <Link to="#" onClick={handleBlogClick}>Blogs</Link>
                        </li>
                        <li>
                            <Link to="/hotels">Hotels</Link>
                        </li>
                        <li>
                            <Link to="/favourites">Favourites ({favouriteCount})</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
