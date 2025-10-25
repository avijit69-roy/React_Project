import React,{useState} from 'react'


const To_to = () => {
  
    const [Task, setTask] = useState([]);
    const [Newtask, setNewtask] = useState("");

    function handleInputChange(e){
       setNewtask(e.target.value);
    }

     function addTask(){
        if(Newtask===""){
            alert("Please enter a task");
            return;
        }
       setTask(t=>[...Task,Newtask]);
        setNewtask("");
    }

     function DeleteTask(index){
       let newElement=[...Task];
        newElement.splice(index,1);
        setTask(newElement);
    }

     function movetaskup(index){
       let newElement=[...Task];
        if(index===0){ return;}
        let tem=  newElement[index-1];
        newElement[index-1]=newElement[index];
        newElement[index]=tem;
        setTask(newElement);
    }

    function movetaskDown(index){
        let newElement=[...Task];
        if(index===(newElement.length)-1){ return;}
        let tem=  newElement[index+1];
        newElement[index+1]=newElement[index];
        newElement[index]=tem;
        setTask(newElement);
    }
  
    return (
    <>
        <div className="todo-container">
           <hi className="todolist">To do list component</hi> 
            
            <div className='div_change'>
                <input type='text' placeholder='Enter the task' value={Newtask}
                    onChange={handleInputChange}></input>
                
                <button onClick={()=>addTask()} className='add_button'>Add Task</button>
            </div>

            <ol>
                {
                    Task.map((task,index)=>
                    <li key={index}>
                        {task}
                        <button onClick={()=>DeleteTask(index)} className='btn'>Delete</button>
                        <button onClick={()=>movetaskup(index)} className='btn'>UP</button>
                        <button onClick={()=>movetaskDown(index)} className='btn'>Down</button>
                    </li>
                    )
                }

            </ol>

        </div>
    </>
  )
}

export default To_to