import React from 'react'
import './HeroSection.css'
import HeroSection from './HeroSection'

import PC from '../../assets/Pc.png'
import iPhone from '../../assets/Iphone-2.png' 
const Home = () => {
  return (
    <div>
        {/* Home Section */}
        <HeroSection title= 'Bye IPhone 16 pro' subtitle='Experince the power of the latest iphone 14 with
        our most pro camera ever 'link ="/" image= {iPhone}/>
        {/* Feature Products */}
        {/* Hero Section */}
        <HeroSection title= 'Build the ultimate setup' subtitle='You can add studio display and color matched magic accessories to your bag after configure yur mac mini' 
          link ="/" image= {PC}/>

        
    </div>
  )
}

export default Home