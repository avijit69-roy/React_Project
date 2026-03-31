// import { Button } from '@mui/material'
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription } from "@/components/ui/popover"
import React, { use, useEffect,useState } from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [OpenDailogue, setOpenDailogue] = useState(false);

  // Get user profile with access token
  const GetUserProfile = async (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, 
    {
      headers: {
        Authorization: `Bearer ${tokenInfo.access_token}`,
        Accept: 'application/json'
      }
    })
      .then(response => {
        console.log("User Profile:", response.data);
        // 1. Save to local storage
        localStorage.setItem("user", JSON.stringify(response.data));
        setOpenDailogue(false); // Close dialog after successful login
       // window.location.reload(); // Refresh the page to update UI with user info
         
      })
  };
  
  // Login function (placeholder)
  const login = useGoogleLogin({
    onSuccess: (codeRes) => {
      GetUserProfile(codeRes);
    },
    onError: (error) => {
      console.error("Google Login Error:", error);
    }
  });

  useEffect(() => { 
    
    if(user && user.picture) {
      console.log(user.picture);
    }
  }, [user])

  return (
    <div className='py-3 shadow-sm flex justify-between px-3'>
      <img src="/logo.svg" alt="Logo" ></img>
      <div>
        {user ?
          <div className='flex gap-5'>
            
            <a href="/create-trip">
              <Button variant="contained" color="primary" className='rounded-full hover:scale-110 border-2 border-blue-500 h-[50px] w-[100px] text-l'> + Create Trip</Button>
            </a>

            <a href="/my-trips">
              <Button variant="contained" color="primary" className='rounded-full hover:scale-110 border-2  border-blue-500 h-[50px] w-[100px]'> My Trips</Button>
            </a>
            <Popover>
              <PopoverTrigger asChild>
                 <img src={user?.picture} className='  border-gray-300 h-[50px] w-[50px]  mr-6 rounded-full hover:border-4 transition-all cursor-pointer '/>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <h2  onClick={()=>
                    {
                      googleLogout();
                      localStorage.clear();
                      // Optionally, you can also redirect the user to a specific page after logout
                      window.location.href = "/"; // redirect to hero
                    
                    }}>LogOut</h2>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
           
          </div>
          :
          <div>
            <Button onClick={() => setOpenDailogue(true)} variant="contained"  className='rounded-full mr-4 bg-blue-500 hover:bg-blue-600 text-white hover:scale-110 border-2  border-blue-500 h-[50px] w-[100px]'>Sign in</Button>
          </div>
          
        }
        <Dialog open={OpenDailogue}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      {/* <img src="/public/logo.svg" /> */}
                      <h2 className="text-lg font-bold mt-7">Sign in with Google</h2>
                      <p>Sign in to the app with google authentication</p>
                      <Button className='mt-5 w-full'
                        onClick={login}>
                        <FcGoogle className='mr-2 flex gap-4 items-center-safe' />
                        Sign in with Google
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

      </div>
    
    </div>
  )
}

export default Header