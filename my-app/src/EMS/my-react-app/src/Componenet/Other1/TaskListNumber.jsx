import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className=' h-40 text-white  w-[35%] bg-red-400 rounded-2xl px-10 py-5'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
        <div className=' h-40 text-white w-[35%] bg-blue-400 rounded-2xl px-10 py-5'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-semibold'>completed</h3>
        </div>
        <div className=' h-40 text-white w-[35%] bg-emerald-400 rounded-2xl px-10 py-5'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-semibold'>Active</h3>
        </div>
        <div className=' h-40 text-white w-[35%] bg-yellow-400 rounded-2xl px-10 py-5'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-semibold'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber