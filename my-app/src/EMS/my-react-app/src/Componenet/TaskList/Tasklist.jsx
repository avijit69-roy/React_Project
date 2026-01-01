import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const Tasklist = ({ data }) => {

 
  return (
    <>
      <div id='TaskList' className='h-[50%] flex items-center flex-nowrap gap-10  w-full p-10 mt-20 overflow-x-auto justify-start '>

        {data.tasks.map((elem,idx) => {
          if (elem.active) {
            return <AcceptTask key={idx} data={elem} />
          }
          if (elem.NewTask) {
            return <NewTask key={idx} data={elem}/> 
          }
          if (elem.completed) {
            return <CompleteTask key={idx} data={elem}/>
          }
          if (elem.failed) {
            return <FailedTask key={idx} data={elem}/>
          }
        })}

      </div>
    </>

  )
}

export default Tasklist