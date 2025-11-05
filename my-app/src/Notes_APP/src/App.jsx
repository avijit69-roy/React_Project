import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Delete } from 'lucide-react';

function App() {
  const [Title, setTitle] = useState("")
  const [Detail, setDetail] = useState("")
  const [Task, setTask] = useState([])

  //Form Submit Handler
  function HandleForm(e){
    
    if (!Title || !Detail){
      alert("Please Fill All The Fields");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    const CopyTask=[...Task]
    CopyTask.push({Title,Detail});
    setTask(CopyTask);
    console.log(Task);
    console.log("Form Submitted");
    setTitle("");
    setDetail("");
  } 
//Delete Note
  function DeleteNote(index){
    console.log("Delete Note",index);
    const CopyTask=[...Task];
    CopyTask.splice(index,1);
    setTask(CopyTask);
  }

  return (
    <>
      <div className='h-screen bg-black text-amber-300  lg:flex'>
        <form className='flex gap-4 items-start w-90 flex-col p-10 lg:w-1/2' 
          onSubmit={(e)=>{HandleForm(e)}}>
          
          <h1 className='text-2xl font-bold mb-4'>ADD Notes</h1>
          {/*1st Input Fields */}
          <input type="text" 
                placeholder='Enter Notes Heading' 
                className='px-5 py-2  border-2 rounded font-medium'
                value={Title}
                onChange={(e)=>{
                  setTitle(e.target.value);
                }}
          />
           {/*Deatil Input Fields */}
          <textarea type="text" 
                placeholder='Write Deatils' 
                className='px-5 py-2  border-2 rounded'
                value={Detail}
                onChange={(e)=>{
                  setDetail(e.target.value);
                }}
          />
          <button className='bg-white text-black ronded px-5 py-2 active:scale-95'>
            Add Notes
          </button>

        </form>
        
        <div className='lg:w-1/2 text-white bg-black-600 p-4 lg:border-l-4 border-emerald-400'>
          <h1 className='text-2xl font-bold mb-3'>Your Notes</h1>
          <div className='flex flex-wrap overflow-auto h-full'>
            {
              Task.map((item,index)=>{
                return(
                <div key={index} className='relative h-42 w-32 bg-cover rounded-2xl m-2.5 text-black 
                px-5 py-7  
                bg-[url("https://www.shutterstock.com/image-illustration/yellow-notes-vector-background-small-260nw-2116908359.jpg")]'
                >
                  <h2 className='absolute top-1 right-1 h-1 rounded-2xl p-1 curesor-pointer'
                  onClick={(e)=>{DeleteNote(index)}}>
                    <Delete size={16} strokeWidth={1.75} className='bg-red-600' />
                  </h2>
                  <h3 className='leading-tight font-bold '>{item.Title} </h3>
                  <p className='text-sm mt-2 leading-tight font-medium'>{item.Detail}</p>
                </div>
                )
              })
            }
            
          </div>
        </div>  
      </div>      
    </>
  )
}

export default App
