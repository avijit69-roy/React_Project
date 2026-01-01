import { Import } from 'lucide-react'
import React from 'react'
import Header1 from '../Other1/Header1.jsx'
import TaskListNumber from '../Other1/TaskListNumber.jsx'
import Tasklist from '../TaskList/Tasklist.jsx'

const EmployeeDashboard = (props) => {
 
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen' >
       
        <Header1 changeUser={props.changeUser} data={props.data} />
        <TaskListNumber data={props.data} />
        <Tasklist data={props.data} />
    </div>
  )
}

export default EmployeeDashboard