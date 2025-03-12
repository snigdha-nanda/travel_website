import React from 'react';
import { useNavigate } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
    const navigate = useNavigate();

    // Function to handle navigation to the details page
    const handleCardClick = () => {
        navigate(`/hotels/${hotel.id}`); // Pass hotel id to the details page
    };

    return (
        <div
            className="bg-white shadow-lg rounded-lg p-5 w-80 md:w-96 flex flex-col hover:cursor-pointer hover:shadow-xl transition duration-300"
            onClick={handleCardClick} // Click event to navigate
        >
            {/* Hotel Image */}
            <div className="h-48 w-full">
                <img
                    src={hotel.thumbnail || 'https://placehold.co/600x400'}
                    alt={hotel.name}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>

            {/* Hotel Name */}
            <div className="h-16 flex flex-col justify-center items-center">
                <h2 className="font-bold text-xl text-blue-800">{hotel.name}</h2>
            </div>

            {/* Hotel Description */}
            <div className="h-14 overflow-hidden">
                <p className="text-gray-700 text-sm">
                    {hotel.hotelDescription
                        ? hotel.hotelDescription.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 100) + "..."
                        : "No description available."}
                </p>
            </div>

            {/* Hotel Details */}
            <div className="h-30 flex flex-col justify-start text-left">
                <p className="text-sm text-gray-600">
                    <strong>📍 Address:</strong> {hotel.address}, {hotel.city}, {hotel.country?.toUpperCase() || "N/A"} - {hotel.zip || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                    <strong>💰 Currency:</strong> {hotel.currency || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                    <strong>⭐ Stars:</strong> {hotel.stars || "N/A"} / 5
                </p>
                <p className="text-sm text-gray-600">
                    <strong>🔥 Rating:</strong> {hotel.rating || "N/A"} / 10 ({hotel.reviewCount || 0} reviews)
                </p>
            </div>

            {/* Favorite Button */}
            <div className="h-12">
                <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded w-full transition duration-300">
                    Add to Favorites
                </button>
            </div>
        </div>
    );
};

export default HotelCard;
