import React from 'react'
import './HeroSection.css'
import HeroSection from './HeroSection'

import PC from '../../assets/Pc.png'
import iPhone from '../../assets/Iphone-2.png' 
import FeaturedProduct from './FeaturedProduct'
const Home = () => {
  return (
    <div>
        {/* Home Section */}
        <HeroSection title= 'Bye IPhone 16 pro' subtitle='Experince the power of the latest iphone 14 with
        our most pro camera ever'
        link ="/products/6ac3ddbaa7d9ea7ffcf1fb3e" image= {iPhone}/>
        {/* Feature Products */}
          <FeaturedProduct/>
        {/* Hero Section */}
        <HeroSection title= 'Build the ultimate setup' subtitle='You can add studio display and color matched magic accessories to your bag after configure yur mac mini' 
          link ="/products/6ac3ddbaa7d9ea7ffcf1fb61" image= {PC}/>

        
    </div>
  )
}

export default Home