import React from 'react'

const AcceptTask = ({data}) => {

    return (
        <div className='flex-shrink-0 h-full w-[500px] justify-between bg-emerald-600 rounded-xl p-3'>

            <div className='flex justify-between items-center'>
                <h3 className='text-white text-2xl font-semibold bg-rose-700 px-5 py-2 rounded'>{data.category}</h3>
                <h4 className='text-white text-xl font-semibold  px-5 py-2'>{data.taskDate}</h4>
            </div>

            <h2 className='mt-5 text-2xl font-medium px-10 text-white' >{data.taskTitle}</h2>
            <p className='mt-1 font-normal text-m px-10 text-white'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 text-white m-3 px-5 py-2 rounded-2xl text-sm not-first:rounded-lg active:scale-95'>Mark as completed</button>
                <button className='bg-red-500 text-white m-3 px-5 py-2 rounded-2xl text-sm not-first:rounded-lg active:scale-95'>Mark as failed</button>
            </div>
        </div>
    )
}

export default AcceptTask