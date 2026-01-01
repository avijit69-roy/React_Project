import React from 'react'
import Header1 from '../Other1/Header1'
import CreateTask from '../Other1/CreateTask.jsx'
import Alltask from '../Other1/Alltask.jsx'
const AdminDashboard = (props) => {
    return (
        <div className='p-10 w-full bg-[#1c1c1c]'>
            <Header1 changeUser={props.changeUser}  />
            <CreateTask />
            <Alltask />
        </div>
    )
}

export default AdminDashboard