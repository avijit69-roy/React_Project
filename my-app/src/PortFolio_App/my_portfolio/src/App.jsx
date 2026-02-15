import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Layout/Navbar.jsx'
import Contact from './Sections/Contact.jsx'
import About from './Sections/About.jsx'
import Experience from './Sections/Experience.jsx'
import Project from './Sections/Project.jsx'
import Hero from './Sections/Hero.jsx'
import Testimonial from './Sections/Testimonial.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <Navbar />
        <Hero />
        <About/>
        <Project/>
        <Experience/>
        <Testimonial/>
        <Contact/>
      </div>
    </>
  )
}

export default App
