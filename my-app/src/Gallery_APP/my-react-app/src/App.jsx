import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Card from './Component/Card.jsx'
// API Calling with Axios  
    function App() {
        
          const [apidata, setapidata] = useState([]);
          const [Index, setIndex] = useState(1)
          const [loading, setLoading] = useState(false);
          async function getdata() {
              
              setLoading(true);  // Start Loading
              const apiUrl = `https://picsum.photos/v2/list?page=${Index}&limit=10`;

              // Axios
              const response = await axios.get(apiUrl); // With this we are requesting backend to provide the data
              const data_1 = response.data
              setapidata(data_1);
              // Fetch
                // const response2 = await fetch(apiUrl);
                // const data_1 = await response2.json();
                // setapidata(data_1);
                // console.log("Fetch data:", apidata[0].url);
                // console.log("Fetch data:", data_1); 
              
              setLoading(false); // Stop Loading
            }
          
          useEffect(() => {
            getdata()
          }, [Index])

          let printdata=<h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2 -transalte-x-1/2 -translate-y-1/2 '>
            </h3>
          
          if(apidata.length>0)
            {
              return( 
                    <>
                      {/* Get data Button */}
                        <div className='p-10'>
                            <button  onClick={getdata} className='btn w-28 h-14 px-3 py-4 rounded text-white bg-amber-400'>
                              Get data
                            </button>
                            <div>{printdata}</div>
                        </div>

                        {/* Here Logic has written to fetch data from API and shown in UI*/}
                            <div className='flex flex-wrap bg-orange-500 px-5 py-3 mt-5'> 
                          
                                  {apidata.map (function(item,idx) {
                                    return <div  key={item.id} className='bg-green-50 justify-between w-40 px-2 py-3 m-3'>
                                                <Card item={item}/>
                                            </div>
                                          }
                                    )
                                  }
                            </div>


                          {/* Previous and next button */}
                            <div className='flex justify-center  px-4 py-5'>
                              <button style={{opacity:Index==1? 0.6: 1}} className='text-black text-sm rounded w-18 active:scale-90 justify-center h-8 m-3 bg-cyan-400'
                              onClick={()=>{
                                if(Index >= 1){
                                  setIndex(Index-1);
                                   
                                }
                              }}>
                                Prvevious
                              </button>
 
                              <h3 className='p-4'>Page {Index}</h3>

                              <button className='text-black text-sm rounded w-18 active:scale-90 justify-center h-8 m-3 bg-cyan-400'
                                onClick={()=>{
                                    setIndex(Index+1);
                                 
                              }}>
                            
                                Next
                              </button>
                            </div>
                    </>
                    )

            }
 
          return (
          <>
            <div className='p-10'>
              <button onClick={getdata} className='btn w-28 h-14 px-3 py-4 rounded active:scale-90 text-white bg-amber-400'>
                Get data</button>
            </div>
          </>    
                  )   
}


export default App


//API Calling with Axios  
    // function App() {
        
    //       const [apidata, setapidata] = useState([]);
    //       async function getdata() {
    //           const apiUrl = 'https://picsum.photos/v2/list?page=2&limit=15';

    //           // Axios
    //           const response = await axios.get(apiUrl);
    //           console.log("Axios data:", response.data);
    //           const data_1 = response.data
    //           setapidata(data_1);
    //           // Fetch
    //             // const response2 = await fetch(apiUrl);
    //             // const data_1 = await response2.json();
    //             // setapidata(data_1);
    //             // console.log("Fetch data:", apidata[0].url);
    //             // console.log("Fetch data:", data_1); 
              
    //         }

    //       return (
    //       <>
    //         <div className='p-10'>
    //           <button onClick={getdata} className='btn'>Get data</button>
    //           <div className='bg-orange-500 px-5 py-3 mt-5'> 
    //             {apidata.map (function(item,idx) {
    //               return <div key={item.id} className='bg-green-50 flex justify-between w-full px-2 py-3 mb-3'>
    //                     <img className="h-40 w-30" src={item.download_url} alt="" />
    //                     <h1>{item.author}</h1>
    //               </div>
    //               }
    //               )
    //             }
    //           </div>
    //         </div>
    //       </>    
    //       )
    //     }
