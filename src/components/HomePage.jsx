import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.svg'; 
import backgroundImage from '../assets/home-banner.png'; 

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/order');
  };

    return (
      <div className="homepage-wrapper"> 
        <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="homepage-content"> 
            <img src={logo} className="homepage-logo" alt="Logo" />
            <h1 className="homepage-title">
            <span className="kod">KOD</span>
              <span> ACIKTIRIR</span>
              <span> </span>
              <span className="pizza-doyurur">PİZZA,DOYURUR</span>
            </h1>
            <button className="homepage-button" onClick={handleButtonClick}>ACIKTIM</button>
          </div>
        </div>
      </div>
    );
}

export default HomePage;