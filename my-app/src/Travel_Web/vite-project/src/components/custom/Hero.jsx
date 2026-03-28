
import { Link } from 'react-router-dom'
import {Button} from '../ui/button'
import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-66 gap-9'>
      <h1 className='font-extrabold text-[45px] text-center mt-15'>
        <span className='text-[#007bff]'>Discover </span>amazing destinations and create unforgettable memories.
      </h1>
      <p className='text-xl text-muted-foreground font-bold text-center'>
        Explore our curated selection of travel experiences and make y   o ur next adventure worthy.
      </p>
      
      <Link to="/create-trip">
        <Button>Get Started,It's Free</Button>
      </Link>

    </div>
  )
}

export default Hero