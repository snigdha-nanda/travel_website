import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-cover bg-center h-[300px] text-white flex flex-col justify-center items-center"
            style={{ backgroundImage: 'url("your-banner-image.jpg")' }}>
            <div className="absolute bg-black opacity-50 inset-0"></div>
            <h1 className="z-10 text-4xl font-bold">Welcome to TravelGo</h1>
            <p className="z-10 text-xl mt-4">Explore amazing destinations around the world!</p>
        </div>
    );
};

export default Banner;
