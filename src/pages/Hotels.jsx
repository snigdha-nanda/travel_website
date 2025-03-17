import React, { useState, useEffect } from 'react';
import useHotels from '../hooks/useHotels';
import HotelCard from '../components/HotelCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import countries from '../assets/Countries';

const Hotels = () => {
    const [countryCode, setCountryCode] = useState('IN');
    const [currentPage, setCurrentPage] = useState(1);
    const hotelsPerPage = 12;

    const { hotels, loading, error, fetchHotels } = useHotels();

    useEffect(() => {
        fetchHotels(countryCode);
    }, [countryCode]);

    const slicedHotels = hotels.slice(0, 50);

    const totalPages = Math.ceil(slicedHotels.length / hotelsPerPage);

    const paginatedHotels = slicedHotels.slice(
        (currentPage - 1) * hotelsPerPage,
        currentPage * hotelsPerPage
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="container mx-auto px-6 py-6">
                <div className="bg-white shadow-md rounded-lg p-4 sticky top-12 z-10 w-auto">
                    <h1 className="text-2xl font-bold text-blue-700">Hotels</h1>
                    <div className="mb-2">
                        <label htmlFor="country" className="block text-gray-700 font-medium mb-1">
                            Select Country:
                        </label>
                        <select
                            id="country"
                            className="border border-gray-300 text-gray-700 rounded-lg px-3 py-2 w-90 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={countryCode}
                            onChange={(e) => {
                                setCountryCode(e.target.value);
                                setCurrentPage(1);
                            }}
                        >
                            {countries.map((country) => (
                                <option
                                    key={country.code}
                                    value={country.code}
                                >
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Loader */}
                {loading ? (
                    <div className="flex justify-center items-center h-[60vh]">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
                    </div>
                ) : (
                    <>
                        {error && <p className="text-red-600 text-center font-semibold">{error}</p>}
                        <div className="flex flex-wrap justify-around gap-6 mt-8">
                            {paginatedHotels.length > 0 ? (
                                paginatedHotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
                            ) : (
                                <p className="text-gray-700 text-center">No hotels found.</p>
                            )}
                        </div>
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-6">
                                <button
                                    className={`px-4 py-2 mx-1 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white'
                                        }`}
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>

                                <span className="px-4 py-2 text-gray-700 font-bold">
                                    Page {currentPage} of {totalPages}
                                </span>

                                <button
                                    className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white'
                                        }`}
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Hotels;