import React from 'react'
import { useState ,useEffect} from "react";
import { logout } from "../../services/userServices";

import './Logout.css'

const Logout = () => {
  
    useEffect(() => {
    logout();
      window.location="/";
    }, [])
    
    return null;
}

export default Logout