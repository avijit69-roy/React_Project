import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'
// import iPhone from '../../assets/Iphone_2_16.webp' Iphine16.png
import iPhone from '../../assets/Iphine16.png' 
const HeroSection = ({title,subtitle,link,image}) => {
  return (
    <section className='hero_section  '>
        <div className='align_center justify-center flex-col text-align-center'>

            <h2 className="hero_tittle">{title} </h2>
            <p className='hero_subtittle'>
                {subtitle}
            </p>

            <Link to={link} className=" hero_link align_center">
                Bye Now 
            </Link>
        </div>

        <div className='align_center'>
            <img src={image} alt='' className='hero_image'/>
           
        </div>
    </section>
  )
}

export default HeroSection