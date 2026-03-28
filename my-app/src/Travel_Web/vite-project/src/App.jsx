//Maps JavaScript API  Key = AIzaSyBrb56HUNbHSuA5a2uDN1KDhnTZ-Vezn9k

// npm install @mui/material @mui/icons-material @mui/lab @emotion/react @emotion/styled @react-google-maps/api axios google-map-react
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CssBaseline, Grid } from '@mui/material'
import './App.css'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Hero from './components/custom/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>    
    </>
  )
}

export default App
