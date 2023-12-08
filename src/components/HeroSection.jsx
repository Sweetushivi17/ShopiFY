import React from 'react'
import { Link } from "react-router-dom";
import HomeImg from '../assets/HOME-IMG-NEW-removebg-preview.png'


const HeroSection = () => {
  return (

    <>
    <div className="hero-section">
        <div className="image-section">
          <img src={HomeImg} alt="" />
        </div>
        <div className="text-section ">
          
            <h1>ShopElegance</h1>
            <h3>"Immerse Yourself in Exclusivity: Your Ultimate Shopping Destination"</h3>
            <button className='Explore'>  <Link to="/products">
                Explore More 
                </Link> </button>
    
        </div>
    </div>
    <div className='Bottom-section'>
  
    </div>
    </>

    

  )
}

export default HeroSection
