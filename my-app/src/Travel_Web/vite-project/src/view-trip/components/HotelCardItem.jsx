import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails } from '../../Service/GlobalApi'

const Hotel_REFERENCE = 'https://places.googleapis.com/v1/NAME/media?max_height_px=400&max_width_px=400&key='+import.meta.env.VITE_MAPS_JAVASCRIPT_API_KEY

function HotelCardItem({ hotel, index }) {

    const [hotelUrl, setHotelUrl] = useState('')    
    const GetPlacePhoto = async () => {

        const data = {
            "textQuery": hotel?.hotel_name + hotel?.address,
        }

        const result = await GetPlaceDetails(data).then((res) => {
            //Place details will be in res.data.places[0] and photos will be in res.data.places[0].photos 
            // which is an array of photos, we will take the first photo and get the photo reference from 
            // it and then construct the actual photo url using the photo reference and set it in state
            
            // console.log('Hotel details', res.data)

            // Get the photo reference from the response and construct the actual photo URL
            const Actual_Hotel_Url = Hotel_REFERENCE.replace('NAME', res.data.places[0]?.photos[0]?.name);
            // console.log('Hotel photo url', Actual_Hotel_Url);
            setHotelUrl(Actual_Hotel_Url);

        }).catch((error) => {
            console.log('error fetching place details', error)
        })
    }

    useEffect(() => {
        hotel && GetPlacePhoto()
    }, [hotel])

    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotel_name + hotel?.address} target="_blank">
            <div key={index} className='shadow-xl/50  hover:scale-110 transition-all cursor-pointer duration-300'>
                <img src={hotelUrl ? hotelUrl : "/HotelBackground.jpg"} alt={hotel.hotel_name} className='rounded-lg object-cover h-[200px] w-full' />
                <div className='p-2 flex flex-col gap-1.5'>
                    <h2 className='text-lg  font-medium'>{hotel?.hotel_name}</h2>
                    <h2 className='text-sm  font-bold text-gray-500'>📍 {hotel?.address}</h2>
                    <h2 className='text-md  font-bold'> 💸 {hotel?.price_per_night} Per Night</h2>
                    <h2 className='text-sm  font-bold'> ⭐ {hotel?.rating} Rating</h2>
                </div>

            </div>
        </Link>
    )
}

export default HotelCardItem