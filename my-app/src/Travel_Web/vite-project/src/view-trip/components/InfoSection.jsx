import { Button } from "@/components/ui/button";
import { RiShareForwardLine } from "react-icons/ri";

import React from 'react'

function InfoSection({ tripdata }) {
    return (
        <div>
            <img src='/IndiaBackground.jpg' alt="Trip Image"
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