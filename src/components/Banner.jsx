import React, { useEffect, useState } from "react";
import "../assets/css/Banner.css";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/images/img-1.jpg",
        "/images/img-2.jpg",
        "/images/img-3.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
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
