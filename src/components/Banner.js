import React from 'react'
import banner from '../img/Product-Images/shoes-2060519_1280.jpg'


const Banner = () => {
    return (

        <div className="banner">
        <img src={banner} alt="Banner Background" className="bannerImg"/>
        <header className="heading">
      <h1>Sale is On! Hurry</h1>
      </header>
      </div>

      
    )
}

export default Banner