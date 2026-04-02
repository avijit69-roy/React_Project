import React, { useEffect, useState } from 'react'
import { GetPlaceDetails } from '../../Service/GlobalApi';
import { Link } from 'react-router-dom';
const Photo_REFERENCE = 'https://places.googleapis.com/v1/NAME/media?max_height_px=900&max_width_px=900&key=' + import.meta.env.VITE_MAPS_JAVASCRIPT_API_KEY


function UserTripCardItem({ trip }) {

    const [PhotoURL, setPhotoUrl] = useState('');

    const GetPlacePhoto = async () => {

        const data = {
            "textQuery": trip?.userSelection?.destination,
        }

        const result = await GetPlaceDetails(data).then((res) => {
            //Place details will be in res.data.places[0] and photos will be in res.data.places[0].photos 
            // which is an array of photos, we will take the first photo and get the photo reference from 
            // it and then construct the actual photo url using the photo reference and set it in state


            // console.log('Destination details', res.data)

            // Get the photo reference from the response and construct the actual photo URL
            const Actual_Photo_Url = Photo_REFERENCE.replace('NAME', res.data.places[0]?.photos[0]?.name);
            // console.log('place photo url', Actual_Photo_Url);
            setPhotoUrl(Actual_Photo_Url);

        }).catch((error) => {
            console.log('error fetching place details', error)
        })
    }

    useEffect(() => {
        trip && GetPlacePhoto()
    }, [trip])

    return (

        <Link to={`/view-trip/${trip?.id}`} >
            <div className=' relative group hover:scale-105 transition-all '>
                <img src={PhotoURL ? PhotoURL : 'IndiaBackground.jpg'} className=" w-full object-cover rounded-2xl" alt={trip.TripName} />

                {/* ❌ appears on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                     
                    }}
                        className="bg-white rounded-full p-1 shadow-md cursor-pointer hover:scale-110 transition-transform">
                        ❌
                    </span>
                </div>

                <div className='object-cover'>
                    <h2 className='font-bold text-md py-3'>{trip?.userSelection?.destination}</h2>
                    <h2 className='font-bold text-sm '>
                        <span className='font-bold px-2'>{trip?.userSelection?.days}</span>
                        Days of trips with {trip?.userSelection?.budget} budget
                    </h2>
                </div>
            </div>

        </Link>
    )
}

export default UserTripCardItem