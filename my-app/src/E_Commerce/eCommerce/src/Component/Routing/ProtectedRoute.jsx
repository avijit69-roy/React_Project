import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getJwt,getUser } from '../../services/userServices.js';


const ProtectedRoute = () => {
  return getUser() ? <Outlet/>: <Navigate to="/login" replace />;
}

export default ProtectedRoute