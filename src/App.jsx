import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './components/HomePage';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/confirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>    
  );
}

export default App;