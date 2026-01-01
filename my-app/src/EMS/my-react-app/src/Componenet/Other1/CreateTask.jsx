import React, { useState,useEffect } from 'react'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [category, setCategory] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    const [newTask, setnewTask] = useState([]);

    const SubmitHandeler = (e) => {
        e.preventDefault();
        const MTask = {
            taskTitle,
            taskDate,
            assignTo,
            category,
            taskDescription,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        };
        setnewTask([MTask]);

        const data2 = JSON.parse(localStorage.getItem("employeesData")); 
        console.log(data2);
        data2.forEach((emp) => {
            if (emp.firstName ===  assignTo) {
                emp.tasks.push(newTask);
                emp.taskCount.newTask += 1;
            }
        });
        localStorage.setItem("employeesData", JSON.stringify(data2));
        // console.log(taskTitle, taskDate, assignTo, category, taskDescription);
        setTaskTitle("");
        setTaskDate("");

        setAssignTo("");
        setCategory("");
        setTaskDescription("");
    }

    useEffect(() => {
            console.log("Task updated:", newTask);
        }, [newTask]);

    return (
        <div className='mt-10 p-5 bg-[rgb(32,32,31)] rounded'>
            <form onSubmit={(e) => { SubmitHandeler(e) }}
                className='flex w-full flex-wrap items-start justify-between '>

                <div className='w-1/2'>
                    <div className='text-white'>
                        <h3 className='text-sm font-bold text-white mb-0.5'>Task List</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm font-bold  w-4/5 px-2 py-3 my-3 outline-none bg-transparent
                             border-[1px] border-gray-400 rounded-lg text-white'  type="text" placeholder='Task Title' />
                    </div>

                    <div className='text-white'>
                        <h3 className='text-sm font-bold text-white mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm font-bold w-4/5 px-2 py-3 my-3 outline-none bg-transparent
                             border-[1px] border-gray-400 rounded-lg text-white' type="date" />
                    </div>

                    <div className='text-white'>
                        <h3 className='text-sm font-bold text-white mb-0.5'>Assign to</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className='text-sm font-bold w-4/5 px-2 py-3 my-3 outline-none bg-transparent
                             border-[1px] border-gray-400 rounded-lg text-white' type="text" placeholder='employee Name' />
                    </div>

                    <div className='text-white'>
                        <h3 className='text-sm font-bold text-white mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm font-bold w-4/5 px-2 py-3 my-3 outline-none bg-transparent
                            border-[1px] border-gray-400 rounded-lg text-white' type="text" placeholder='Desing, Dev, Etc' />
                    </div>

                </div>

                <div className='flex flex-col text-white items-start  w-2/5'>
                    <h3 className='text-sm font-bold text-white mb-0.5'>Task Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='text-sm h-60 w-4/5 px-2 py-3 my-3 outline-none bg-transparent
                             border-[1px] border-gray-400 rounded-lg text-white font-bold' placeholder='Task Description'></textarea>

                    <button type='submit' className='bg-emerald-600 hover:bg-emerald-700 
                        mt-4 py-3 px-5 text-sm font-bold rounded-xl text-lg text-white w-4/5'>Create Task</button>
                </div>

            </form>
        </div>

    )
}

export default CreateTask