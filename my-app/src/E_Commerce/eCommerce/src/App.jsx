import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen gap-[10px] grid grid-rows-[80px_auto]'>
        <Navbar/>

        <main>
          <Home/>
        </main>
      </div>
    </>
  )
}

export default App
