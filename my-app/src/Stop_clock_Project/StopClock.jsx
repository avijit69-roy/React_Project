import React,{useState,useEffect,useRef} from 'react'

const StopClock = () => {

    const [isRunning, setisRunning] = useState(false);
    const [eclapsedTime,setEcalpsedTime]=useState(0);
    const intervalRef=useRef(null);
    const startTimeRef=useRef(0);
  
    useEffect(() => {
       if (isRunning) {
        intervalRef.current = setInterval(() => {
        setEcalpsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
        return () => clearInterval(intervalRef.current);
        }, [isRunning]);


   

  
    function startClock() {
        setisRunning(true);
        startTimeRef.current=Date.now()-eclapsedTime;
    }
     function stopClock() {
        setisRunning(false);
    }
     function resetClock() {
      setEcalpsedTime(0);
      setisRunning(false);
    }
     function formatTime() {
        let hours=Math.floor(eclapsedTime/(1000*60*60));
        let minutes=Math.floor((eclapsedTime%(1000*60*60))/(1000*60));
        let seconds=Math.floor((eclapsedTime%(1000*60))/(1000));
        let milliseconds=Math.floor((eclapsedTime%(1000))/10);

        return `${String(hours).padStart(2,'0')} : ${String(minutes).padStart(2,'0')} : ${String(seconds).padStart(2,'0')} : ${String(milliseconds).padStart(2,'0')}`;
    } 
  
    return (
    <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="control">
            <button className='start-button' onClick={startClock}>Start</button>
            <button className='stop-button' onClick={stopClock}>Stop</button>
            <button className='reset-button' onClick={resetClock}>Reset</button>
        </div>
        
    </div>
  )
}

export default StopClock