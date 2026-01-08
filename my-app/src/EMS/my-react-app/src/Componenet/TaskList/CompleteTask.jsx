import React from 'react'

const CompleteTask = ({indx, data, data1, setData}) => {

    const handleClick = () => { 
        // 1. Create the updated task list for THIS employee
        const updatedTasks = data1.tasks.filter((_, i) => i !== indx);
        
        // 2. Update the parent's state (which is 'data1' in Tasklist)
        // We find the current employee in the big list and update them
        const updatedGlobalData = JSON.parse(localStorage.getItem("employeesData")).map((emp) => {
            if (emp.email === data1.email) {
                return {
                    ...emp,
                    tasks: updatedTasks,
                    taskCount: {
                        ...emp.taskCount,
                        completed: emp.taskCount.completed + 1
                    }
                };
            }
            return emp;
        });

        // 3. Update State and LocalStorage
        setData(updatedGlobalData);
        localStorage.setItem("employeesData", JSON.stringify(updatedGlobalData));
        
        // 4. Update the loggedInUser in localStorage so the dashboard stays synced
        const currentUser = updatedGlobalData.find(e => e.email === data1.email);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data1: currentUser }));
        
        // Optional: Refresh page or lift state up to App.jsx to see changes immediately
        window.location.reload(); 
    };

    return (
        <div className='flex-shrink-0 h-full w-[500px] justify-between bg-yellow-600 rounded-xl p-3'>

            <div className='flex justify-between items-center'>
                <h3 className='text-white text-2xl font-semibold bg-rose-700 px-5 py-2 rounded'>{data.category}</h3>
                <h4 className='text-white text-xl font-semibold  px-5 py-2'>{data.taskDate}</h4>
            </div>

            <h2 className='mt-5 text-2xl font-medium px-10 text-white' >{data.taskTitle}</h2>
            <p className='mt-1 font-normal text-m px-10 text-white'>
                {data.taskDescription}
            </p>

            <div className='flex justify-center mt-4'>
                <button onClick={handleClick} value={data1} className='bg-green-500 text-white m-3 px-5 py-2 rounded-2xl text-sm not-first:rounded-lg active:scale-95'>
                    Completed
                </button>

            </div>

        </div>
    )
}

export default CompleteTask