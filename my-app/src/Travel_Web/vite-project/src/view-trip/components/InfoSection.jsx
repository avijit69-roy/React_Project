import { Button } from "@/components/ui/button";
import { RiShareForwardLine } from "react-icons/ri";

import React, { useEffect,useState } from 'react'
import { GetPlaceDetails } from "../../Service/GlobalApi";
//Actaul Photo URL= https://places.googleapis.com/v1/NAME/media?key=API_KEY&PARAMETERS

const Photo_REFERENCE = 'https://places.googleapis.com/v1/NAME/media?max_height_px=900&max_width_px=900&key='+import.meta.env.VITE_MAPS_JAVASCRIPT_API_KEY

function InfoSection({ tripdata }) {

    const [PhotoURL, setPhotoUrl] = useState('');

    const GetPlacePhoto = async () => {
        
        const data={
            "textQuery": tripdata?.userSelection?.destination,
        }
        
        const result = await GetPlaceDetails(data).then((res) => {
            //Place details will be in res.data.places[0] and photos will be in res.data.places[0].photos 
            // which is an array of photos, we will take the first photo and get the photo reference from 
            // it and then construct the actual photo url using the photo reference and set it in state
            
            
            // console.log('Destination details', res.data)
            
            // Get the photo reference from the response and construct the actual photo URL
            const Actual_Photo_Url= Photo_REFERENCE.replace('NAME', res.data.places[0]?.photos[0]?.name);
            // console.log('place photo url', Actual_Photo_Url);
            setPhotoUrl(Actual_Photo_Url);
            
        }).catch((error) => {
            console.log('error fetching place details', error)
        })
    }

    useEffect(() => {
       tripdata && GetPlacePhoto()
    }, [tripdata])

    return (

        <div>
            <img src={PhotoURL? PhotoURL : "/IndiaBackground.jpg"} alt="Trip Image"
                className='w-full h-[400px] object-cover' />
            <div className="flex items-center justify-between">
                <div className='my-5 flex flex-col gap-3'>
                    <h2 className='font-bold text-2xl'>{tripdata?.userSelection?.destination}</h2>

                    <div className='flex gap-5'>
                        <h2 className='px-3 bg-blue-200 text-gray-700 rounded-full h-8 text-lg md:text-md items-center' >🗓️ {tripdata?.userSelection?.days} Day</h2>
                        <h2 className='px-3 bg-blue-200 text-gray-700 rounded-full h-8 text-lg md:text-md items-center '>💰 {tripdata?.userSelection?.budget} Budget</h2>
                        <h2 className='px-3 bg-blue-200 text-gray-700 rounded-full h-8 text-lg md:text-md items-center'>✈️ with {tripdata?.userSelection?.travelType}</h2>
                    </div>
                </div>
                <Button><RiShareForwardLine /></Button>
            </div>
        </div>

    )
}

export default InfoSection