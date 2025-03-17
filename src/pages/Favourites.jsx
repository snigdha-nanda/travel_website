import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    // Load favourites from localStorage
    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        setFavourites(storedFavourites);
    }, []);

    // Function to remove hotel from favourites
    const removeFromFavourites = (hotelId) => {
        const updatedFavourites = favourites.filter(hotel => hotel.id !== hotelId);
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        window.dispatchEvent(new Event("updateFavourites"));
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />

            {/* Main Content Area */}
            <div className="container mx-auto px-6 py-12 flex-grow">
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-6 mt-6">
                    Your Favourite Hotels
                </h1>

                {favourites.length === 0 ? (
                    <div className="text-center mt-16">
                        <p className="text-lg text-gray-500">No hotels added to favourites yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {favourites.map((hotel) => (
                            <div
                                key={hotel.id}
                                className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto hover:shadow-xl transition duration-300"
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
                                <div className="mt-4 text-center">
                                    <h2 className="font-bold text-2xl text-blue-800">{hotel.name}</h2>
                                </div>

                                {/* Hotel Description */}
                                <div className="mt-2 text-center">
                                    <p className="text-gray-600 text-sm">
                                        {hotel.hotelDescription
                                            ? hotel.hotelDescription.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 100) + "..."
                                            : "No description available."}
                                    </p>
                                </div>

                                {/* Hotel Details */}
                                <div className="mt-4 text-gray-600 text-sm">
                                    <p><strong>📍 Address:</strong> {hotel.address}, {hotel.city}, {hotel.country?.toUpperCase() || "N/A"} - {hotel.zip || "N/A"}</p>
                                    <p><strong>💰 Currency:</strong> {hotel.currency || "N/A"}</p>
                                    <p><strong>⭐ Stars:</strong> {hotel.stars || "N/A"} / 5</p>
                                    <p><strong>🔥 Rating:</strong> {hotel.rating || "N/A"} / 10 ({hotel.reviewCount || 0} reviews)</p>
                                </div>

                                {/* Remove from Favourites Button */}
                                <div className="mt-6 text-center">
                                    <button
                                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md w-full transition duration-300"
                                        onClick={() => removeFromFavourites(hotel.id)}
                                    >
                                        Remove from Favourites
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer - Stays at the Bottom */}
            <Footer />
        </div>
    );
};

export default Favourites;
