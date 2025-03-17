import React, { useEffect, useState } from "react";
import "../assets/css/Banner.css";  // Import the CSS file for styling

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://placehold.co/1530x730",
        "https://placehold.co/1530x730",
        "https://placehold.co/1530x730",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change images every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
    }, [images.length]);

    return (
        <div className="carousel-container">
            <div
                className="carousel-slide"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="carousel-image"
                        />
                    </div>
                ))}
            </div>
            <div className="carousel-overlay"></div>
            <div className="carousel-caption">
                <h1 className="carousel-title">Welcome to TravelGo</h1>
                <p className="carousel-subtitle">Explore amazing destinations around the world!</p>
            </div>
        </div>
    );
};

export default Carousel;
