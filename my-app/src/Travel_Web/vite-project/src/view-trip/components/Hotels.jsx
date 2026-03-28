import React from 'react'
import { Link } from 'react-router-dom';

function Hotels({ tripdata }) {
    const hotelList = tripdata?.TripData?.hotel_options || tripdata?.TripData?.hotels ||[];
    return (
        console.log('trip data', { tripdata }),
        <div>
            <h2 className='font-bold text-xl mt-4'>
                Hotel Recommedation
            </h2>
            <div className= ' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-10 mt-4'>
               {hotelList.map((hotel, index) => (

                    <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotel_name + hotel?.address} target="_blank">
                    <div key={index} className='shadow-xl/20  hover:scale-110 transition-all cursor-pointer duration-300'>
                        <img src={hotel.image_url} alt={hotel.hotel_name} className='rounded-lg object-cover'/>
                        <div className='p-2 flex flex-col gap-1.5'>
                            <h2 className='text-lg  font-medium'>{hotel?.hotel_name}</h2>
                            <h2 className='text-sm  font-bold text-gray-500'>📍 {hotel?.address}</h2>
                            <h2 className='text-md  font-bold'> 💸 {hotel?.price_per_night} Per Night</h2>
                            <h2 className='text-sm  font-bold'> ⭐ {hotel?.rating} Rating</h2>
                        </div>
                        
                    </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default Hotels