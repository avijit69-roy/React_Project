import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails } from '../../Service/GlobalApi'

const Place_REFERENCE = 'https://places.googleapis.com/v1/NAME/media?max_height_px=400&max_width_px=400&key='+import.meta.env.VITE_MAPS_JAVASCRIPT_API_KEY

const PlaceCardItem = ({ place }) => {

  
      const [placeUrl, setPlaceUrl] = useState('')    
      const GetPlacePhoto = async () => {
  
          const data = {
              "textQuery": place?.placeName + place?.placeAddress,
          }
  
          const result = await GetPlaceDetails(data).then((res) => {
              //Place details will be in res.data.places[0] and photos will be in res.data.places[0].photos 
              // which is an array of photos, we will take the first photo and get the photo reference from 
              // it and then construct the actual photo url using the photo reference and set it in state
              
              // console.log('Place2 details', res.data)
  
              // Get the photo reference from the response and construct the actual photo URL
              const Actual_Place_Url = Place_REFERENCE.replace('NAME', res.data.places[0]?.photos[0]?.name);
    
              setPlaceUrl(Actual_Place_Url);
  
          }).catch((error) => {
              console.log('error fetching place details', error)
          })
      }
  
      useEffect(() => {
          place && GetPlacePhoto()
      }, [place])
  

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.placeAddress + place?.placeName } target="_blank">
    <div className='border-1 shadow-lg shadow-indigo-500/50 rounded-xl p-3 mt-3 flex gap-4 hover:scale-105 transition-all duration-300 cursor-pointer'>
        <img src={placeUrl ? placeUrl : "/IndiaBackground.jpg"} alt={place?.placeName} className='w-[150px] h-[150px] object-cover rounded-xl'/>
        
        <div>
             <h2 className='font-bold text-lg'>{place?.placeName}</h2>
             <p className='text-sm text-gray-500'>{place?.placeDetails}</p>
             <h2 className='mt-2'>⏰ {place?.timeTravel}</h2>
        </div>
       
    </div>
    </Link>
  )
}

export default PlaceCardItem