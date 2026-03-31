import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CreateTrip from './Create-trip/index.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/custom/Header.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Router } from 'lucide-react'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripid]/index2.jsx'
import MyTrips from './my_Trips/index3.jsx'

const router = createBrowserRouter([
      {
            path: "/",
            element: <App />
      },
      {
            path: "/create-trip",
            element: <CreateTrip />
      },

      {
            //Dynamic route for viewing a specific trip based on its ID
            path: "/view-trip/:tripid",
            element: <Viewtrip/>
      },
      {
            path: "/my-trips",
            element:<MyTrips/>
      }


])



ReactDOM.createRoot(document.getElementById('root')).render(
      <>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
                  <Header />
                  <Toaster position="top-right" className='bg-blue-500 text-gray-800' richColors />
                  <RouterProvider router={router} />
            </GoogleOAuthProvider>
      </>
)