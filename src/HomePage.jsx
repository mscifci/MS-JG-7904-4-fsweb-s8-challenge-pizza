import React from 'react';
import './HomePage.css'; 
import logo from './assets/logo.svg'; 
import backgroundImage from './assets/home-banner.png'; 

function HomePage() {
    return (
      <div className="homepage-wrapper"> 
        <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="homepage-content"> 
            <img src={logo} className="homepage-logo" alt="Logo" />
            <h1 className="homepage-title">
            <span className="kod">KOD</span>
              <span> ACIKTIRIR</span>
              <span> </span>
              <span className="pizza-doyurur">PİZZA, DOYURUR</span>
            </h1>
            <button className="homepage-button">ACIKTIM</button>
          </div>
        </div>
      </div>
    );
}

export default HomePage;