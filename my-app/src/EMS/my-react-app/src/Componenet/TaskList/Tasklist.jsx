import React, { useState, useEffect } from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'



const Tasklist = ({ data,data1,setData}) => {

  // const [TaskCountValue, setTaskCountValue] = useState(0);
  // const [Tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   if (data?.tasks) {
  //     setTasks(data.tasks);
  //     setTaskCountValue(data.taskCount.completed);
  //   }
  // }, []);

  // const Newdata1 = data1.map((emp) => {
  //   if (emp.email === data.email) {
  //     return {
  //       ...emp,
  //       tasks: [Tasks],
  //       taskCount: {
  //         ...emp.taskCount,
  //         completed: TaskCountValue
  //       }
  //     };
  //   }
  //   return emp;
  // });



  if (!data || !data.tasks) return null;

  return (
    <div
      id='TaskList'
      className='h-[50%] flex items-center flex-nowrap gap-10 w-full p-10 mt-20 overflow-x-auto justify-start'
    >
      {data.tasks.map((elem, idx) => {
 
        if (elem.active) {
          return <AcceptTask indx={idx} data={elem} />
        }

        if (elem.newTask) {
          return <NewTask indx={idx} data={elem} />
        }

        if (elem.completed) {
          return <CompleteTask indx={idx} data1={data} setData={setData} data={elem} />
        }

        if (elem.failed) {
          return <FailedTask indx={idx} data={elem} />
        }

        return null;
      })}
    </div>
  )
}

export default Tasklist