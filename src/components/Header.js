import React from 'react';
import webLogo from '../img/ShoeStreak_Logo.svg'


const Header = () => {

    return (
        <header className="page-header">
        <a href="index.html" className="logo"><img src={webLogo} alt="logo"/></a>
  
        <h3 className="store-name">Shoe <br/> Streak</h3>
  
          
         
         <div className="search-box">
          <input id="filterSearch" className="search-bar" type="search" name="search" placeholder="      Search" autoComplete="off"/>
        </div>
  
         
        <div className="your-products">
          
          <a href="#"><img className="Icon" src="src/img/Svg-Icons/Like- Heartin.svg" alt="Favourite"/></a>
          <a href="#"><img className="Icon" src="src/img/Svg-Icons/shopping-cart.svg" alt="Favourite"/></a>
          <a href="#"><img className="Icon" src="src/img/Svg-Icons/menu (1).svg" alt="Open Menu" /></a>
        </div>
      </header>
	)
}

export default Header