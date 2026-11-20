import React,{useState,useEffect} from 'react'
import apiClient from '../utils/api-client'


function useData(url,customConfig, dependecy) {
 
       const [data, setData] = useState(null);
       const [error, setError] = useState("");
       const [isloading,setIsloading]=useState(false);
       
       useEffect(() => {
      
       
        {/* when isloading is true means data is loading, at this time skeleton will be displayed */}
        setIsloading(true);


        {/* apiClient is a custom axios instance that we have created in utils/api-client.js file. 
        It has the base URL of our API and also has the Authorization header with the token. */}
         apiClient.get(url,customConfig)
         .then((res)=>{
            setData(res.data);
            setIsloading(false);
        })
         .catch((err) => {
            setError(err.message);
            setIsloading(false);
        });
       }, dependecy ? dependecy :[]);

    return {data,error,isloading};
}

export default useData