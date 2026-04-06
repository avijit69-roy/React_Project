import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CreateTrip from './Create-trip/index.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/custom/Header.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Router } from 'lucide-react'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripid]/index2.jsx'
import MyTrips from './my_Trips/index3.jsx'



// Create a Layout component to wrap your routes
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This is where the specific page content will render */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap everything in the Layout
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/create-trip",
        element: <CreateTrip />
      },
      {
        path: "/view-trip/:tripid",
        element: <Viewtrip />
      },
      {
        path: "/my-trips",
        element: <MyTrips />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <Toaster position="top-right" richColors />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>

)


// const router = createBrowserRouter([
//       {
//             path: "/",
//             element: <App />
//       },
//       {
//             path: "/create-trip",
//             element: <CreateTrip />
//       },

//       {
//             //Dynamic route for viewing a specific trip based on its ID
//             path: "/view-trip/:tripid",
//             element: <Viewtrip />
//       },
//       {
//             path: "/my-trips",
//             element: <MyTrips />
//       }

// ])



// ReactDOM.createRoot(document.getElementById('root')).render(
//       <>
//             <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
             
//                   <BrowserRouter>
//                         <Header />
//                   </BrowserRouter>
                  
//                   <Toaster position="top-right" className='bg-blue-500 text-gray-800' richColors />
//                   <RouterProvider router={router} />
//             </GoogleOAuthProvider>

//       </>
// )