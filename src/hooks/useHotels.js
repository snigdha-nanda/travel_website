import { useState } from 'react';

const useHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [hotelDetails, setHotelDetails] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchHotels = async (countryCode = 'IN') => {
        setLoading(true);

        try {
            const response = await fetch(`https://api.liteapi.travel/v3.0/data/hotels?countryCode=${countryCode}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'sand_4a7ca3f2-7cd4-4d1b-91df-c8b083344cc1',
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch hotels');
            }

            const data = await response.json();
            setHotels(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchHotelDetails = async (hotelId) => {
        setLoading(true);

        try {
            const response = await fetch(`https://api.liteapi.travel/v3.0/data/hotel?hotelId=${hotelId}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'sand_4a7ca3f2-7cd4-4d1b-91df-c8b083344cc1',
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch hotel details');
            }

            const data = await response.json();
            setHotelDetails(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    return { hotels, loading, error, fetchHotels, hotelDetails, fetchHotelDetails };
};

export default useHotels;
