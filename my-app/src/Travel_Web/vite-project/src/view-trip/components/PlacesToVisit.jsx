import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ tripdata }) {
    return (
        <div className='mt-10'>
            <h2 className='font-extrabold text-2xl text-center mt-4'>Places to Visit</h2>
            <div>
                {tripdata?.TripData?.itinerary?.map((item, index1) => (
                    <div key={index1} className='mt-6'>
                        <h2 className='font-medium text-lg '>Day {item.day}</h2>
                        <div className='grid md:grid-cols-2 gap-6'>
                            {item.plan?.map((place, index2) => (
                                <div key={index2} className='mt-2'>
                                    <h2 className='font-bold text-sm text-orange-500'>{place?.bestTimeToVisit}</h2>
                                    <PlaceCardItem place={place} />
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlacesToVisit