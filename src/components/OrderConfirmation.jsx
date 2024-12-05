import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OrderConfirmation.css';
import logo from '../assets/logo.svg'; 

function OrderConfirmation() {
    return (
        <div className="order-confirmation-container">
            <div className="order-confirmation-content">
                <img src={logo} alt="Logo" className="order-confirmation-logo" />
                <h1 className="order-confirmation-message">TEBRİKLER!</h1>
                <h1 className="order-confirmation-message">SİPARİŞİNİZ ALINDI!</h1>
            </div>
        </div>
    );
}

export default OrderConfirmation;