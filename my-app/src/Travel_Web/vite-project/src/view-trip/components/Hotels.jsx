import React from 'react'
import { Link } from 'react-router-dom';
import HotelCardItem from './HotelCardItem';

function Hotels({ tripdata }) {
    const hotelList = tripdata?.TripData?.hotel_options || tripdata?.TripData?.hotels ||[];
    return (
        console.log('trip data', { tripdata }),
        <div>
            <h2 className='font-bold text-xl '>
                Hotel Recommedation
            </h2>
            <div className= ' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-10 mt-6'>
               {hotelList.map((hotel, index) => (
                     <HotelCardItem hotel={hotel} index={index} />
                ))}
            </div>
        </div>

    )
}

export default Hotels