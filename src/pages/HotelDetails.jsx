import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHotels from "../hooks/useHotels";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HotelDetails = () => {
    const { hotelId } = useParams();
    const { hotelDetails, fetchHotelDetails, loading, error } = useHotels();
    const [currentImage, setCurrentImage] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [showAllAmenities, setShowAllAmenities] = useState(false);

    useEffect(() => {
        fetchHotelDetails(hotelId);
    }, [hotelId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen w-[99vw] bg-white">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
            </div>
        );
    }

    if (!loading && !hotelDetails) {
        return <div className="text-center text-red-500 text-xl">Hotel not found</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 text-xl">Error: {error}</div>;
    }

    // Function to smoothly transition to the next image
    const handleNextImage = (room) => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % room.photos.length);
            setIsFading(false);
        }, 500);
    };

    // Function to smoothly transition to the previous image
    const handlePrevImage = (room) => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentImage((prev) => (prev - 1 + room.photos.length) % room.photos.length);
            setIsFading(false);
        }, 500);
    };

    return (
        <div className="bg-white text-gray-700 w-[99vw]">
            <Header />

            {/* Main Hotel Image */}
            <section className="w-full h-80 sm:h-96">
                <img
                    src={hotelDetails.main_photo}
                    alt={hotelDetails.name}
                    className="w-full h-full object-cover"
                />
            </section>

            {/* Hero Section*/}
            <section className="bg-blue-900 text-white text-center py-6 px-4">
                <h1 className="text-3xl font-bold">{hotelDetails.name}</h1>
                <p className="text-lg mt-1">⭐ {hotelDetails.rating} / 10 ({hotelDetails.reviewCount} reviews)</p>
            </section>

            {/* Address Section */}
            <section className="max-w-4xl mx-auto p-6">
                <h2 className="text-xl font-semibold text-blue-800">📍Address</h2>
                <p className="mt-2">{hotelDetails.address}, {hotelDetails.city}, {hotelDetails.country.toUpperCase()}</p>
            </section>

            {/* Hotel Description */}
            <section className="max-w-4xl mx-auto p-6">
                <h2 className="text-2xl font-semibold text-blue-800">Hotel Description</h2>
                <p className="mt-2 text-gray-700 text-left" dangerouslySetInnerHTML={{ __html: hotelDetails.hotelDescription }} />
            </section>

            {/* Hotel Important Information */}
            <section className="max-w-4xl mx-auto p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 rounded-lg">
                <h2 className="text-2xl font-semibold text-yellow-800">Important Information</h2>
                <p className="mt-2 text-gray-700" dangerouslySetInnerHTML={{ __html: hotelDetails.hotelImportantInformation }} />
            </section>

            {/* Room Details */}
            <section className="max-w-4xl mx-auto p-6">
                <h2 className="text-2xl font-semibold text-blue-800">Rooms</h2>
                {hotelDetails.rooms.map((room, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-md mt-6">
                        {/* Room Image Carousel */}
                        <div className="relative w-full h-60 sm:h-80 rounded-lg overflow-hidden">
                            {room.photos?.length > 0 ? (
                                <>
                                    <img
                                        src={room.photos[currentImage]?.url || room.photos[currentImage]?.failoverPhoto}
                                        alt={`Room Image ${currentImage + 1}`}
                                        className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                                            }`}
                                    />
                                    {/* Navigation Buttons */}
                                    <button
                                        onClick={() => handlePrevImage(room)}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                                    >
                                        ❮
                                    </button>
                                    <button
                                        onClick={() => handleNextImage(room)}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                                    >
                                        ❯
                                    </button>
                                </>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                    <span className="text-gray-600">No Images Available</span>
                                </div>
                            )}
                        </div>

                        {/* Room Details */}
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-blue-800">{room.roomName}</h3>
                            <p className="mt-2 text-gray-700 text-left" dangerouslySetInnerHTML={{ __html: room.description }} />
                        </div>
                        {/* Row Layout for Room Info and Amenities */}
                        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-6">
                            {/* Room Details */}
                            <div className="flex-1">
                                <h4 className="font-semibold text-blue-700">Room Details</h4>
                                <p><strong>Size:</strong> {room.roomSizeSquare} {room.roomSizeUnit}</p>
                                <p><strong>Max Adults:</strong> {room.maxAdults}</p>
                                <p><strong>Max Children:</strong> {room.maxChildren}</p>
                                <p><strong>Occupancy:</strong> {room.maxOccupancy}</p>
                            </div>

                            {/* Bed Details */}
                            <div className="flex-1">
                                <h4 className="font-semibold text-blue-700">Bed Type</h4>
                                {room.bedTypes.length > 0 ? (
                                    room.bedTypes.map((bed, i) => (
                                        <p key={i}>
                                            <strong>{bed.quantity}x</strong> {bed.bedType} ({bed.bedSize})
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-gray-600">No bed information available</p>
                                )}
                            </div>

                            {/* Amenities */}
                            <div className="flex-1">
                                <h4 className="font-semibold text-blue-700">Amenities</h4>
                                <p className="text-gray-700 break-words">
                                    {room.roomAmenities
                                        .slice(0, showAllAmenities ? room.roomAmenities.length : 6)
                                        .map((amenity) => amenity.name)
                                        .join(", ")}
                                </p>
                                {room.roomAmenities.length > 6 && (
                                    <span
                                        onClick={() => setShowAllAmenities(!showAllAmenities)}
                                        className="mt-2 font-bold text-blue-600 hover:underline hover:cursor-pointer focus:outline-none"
                                    >
                                        {showAllAmenities ? "Show Less" : "More Details"}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            
            {/* Check-in and Check-out Times */}
            <section className="max-w-4xl mx-auto p-6">
                <h2 className="text-2xl font-semibold text-blue-800">Property Rules</h2>
                <p><strong>Check-in:</strong> {hotelDetails.checkinCheckoutTimes.checkinStart} - {hotelDetails.checkinCheckoutTimes.checkinEnd}</p>
                <p><strong>Check-out:</strong> {hotelDetails.checkinCheckoutTimes.checkout}</p>
            </section>

            {/* Hotel Policies */}
            <section className="max-w-4xl mx-auto p-6">
                <h2 className="text-2xl font-semibold text-blue-800">Hotel Policies</h2>
                <ul className="list-disc pl-6">
                    {hotelDetails.policies.map((policy, index) => (
                        <li key={index} className="mt-2 text-left">
                            <strong>{policy.name}:</strong> {policy.description || "No specific details"}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Sentiment Analysis */}
            {hotelDetails.sentiment_analysis && (
                <section className="max-w-4xl mx-auto p-6">
                    <h2 className="text-2xl font-semibold text-blue-800">Guest Sentiment Analysis</h2>

                    {/* Pros & Cons */}
                    <div className="flex flex-col sm:flex-row justify-between gap-6 mt-4">
                        {/* Pros */}
                        <div className="flex-1 text-left border p-4 rounded-lg bg-green-100">
                            <h3 className="text-lg text-center font-semibold text-green-700">Pros</h3>
                            <ul className="list-disc list-inside text-gray-700 mt-2">
                                {hotelDetails.sentiment_analysis.pros.map((pro, index) => (
                                    <li key={index}>{pro}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Cons */}
                        <div className="flex-1 text-left border p-4 rounded-lg bg-red-100">
                            <h3 className="text-lg text-center font-semibold text-red-700">Cons</h3>
                            <ul className="list-disc list-inside text-gray-700 mt-2">
                                {hotelDetails.sentiment_analysis.cons.map((con, index) => (
                                    <li key={index}>{con}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Ratings Table */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-blue-700">Category Ratings</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full mt-2 border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-blue-100">
                                        <th className="border p-2">Category</th>
                                        <th className="border p-2">Rating</th>
                                        <th className="border p-2">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {hotelDetails.sentiment_analysis.categories.map((category, index) => (
                                        <tr key={index} className="hover:bg-gray-100">
                                            <td className="border p-2 font-semibold text-left">{category.name}</td>
                                            <td className="border p-2 text-center">{category.rating}/10</td>
                                            <td className="border p-2 text-left">{category.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
};

export default HotelDetails;
