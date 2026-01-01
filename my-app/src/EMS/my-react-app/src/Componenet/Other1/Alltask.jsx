import React, { useContext } from 'react'
import { DataContext } from '../../Context/AuthProvider'

const Alltask = () => {

    const Authdata = useContext(DataContext);
    return (
        <div className='mt-10 p-5 bg-[rgb(32,32,31)] h-60 '>

            <div className='bg-red-400 p-4 mb-2 text-xl font-bold text-white flex rounded justify-between items-center'>
                <h2 className='text-xl font-medium w-1/5 text-black'>Employee Name</h2>
                <h3 className='text-xl font-medium w-1/5 text-black'>New Task</h3>
                <h3 className='text-xl font-medium w-1/5 text-black'>Active Task</h3>
                <h3 className='text-xl font-medium w-1/5 text-black'>completed</h3>
                <h3 className='text-xl font-medium w-1/5 text-black'>Failed</h3>
            </div>


            <div className='h-[80%] overflow-auto'> 
                {Authdata && Authdata.employee.map((elem, idx) => (
                    <div key={idx} className='bg-black p-4 border-red-400 mb-2 text-xl font-bold text-white flex rounded justify-between items-center'>
                        <h2 className='text-xl font-medium w-1/5 text-white'>{elem.firstName}</h2>
                        <h3 className='text-xl font-medium w-1/5 text-blue-600'>{elem.taskCount.newTask}</h3>
                        <h3 className='text-xl font-medium w-1/5 text-yellow-300'>{elem.taskCount.active}</h3>
                        <h3 className='text-xl font-medium w-1/5 text-green-600'>{elem.taskCount.completed}</h3>
                        <h3 className='text-xl font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h3>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Alltask