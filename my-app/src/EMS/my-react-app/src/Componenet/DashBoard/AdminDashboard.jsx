import React, { useEffect, useState } from 'react'
import Header1 from '../Other1/Header1'
import CreateTask from '../Other1/CreateTask.jsx'
import Alltask from '../Other1/Alltask.jsx'

const AdminDashboard = (props) => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("employeesData"));
        setEmployees(data || []);
    }, []);

   
    return (
        <div className='p-10 w-full bg-[#1c1c1c]'>
            <Header1 changeUser={props.changeUser} />
            <CreateTask employees={employees} setEmployees={setEmployees} />
            <Alltask employees={employees} />
        </div>
    )
}

export default AdminDashboard