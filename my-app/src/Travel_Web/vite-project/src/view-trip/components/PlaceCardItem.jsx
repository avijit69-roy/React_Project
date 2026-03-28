import React from 'react'
import { Link } from 'react-router-dom'


const PlaceCardItem = ({ place }) => {
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.placeAddress + place?.placeName } target="_blank">
    <div className='border-1 shadow-lg shadow-indigo-500/50 rounded-xl p-3 mt-3 flex gap-4 hover:scale-105 transition-all duration-300 cursor-pointer'>
        <img src={'/public/IndiaBackground.jpg'} alt={place?.placeName} className='w-[150px] h-[150px] rounded-xl'/>
        
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