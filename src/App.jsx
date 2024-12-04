import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Router'ı doğru şekilde içe aktarın
import './App.css';
import HomePage from './components/HomePage';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderForm />} />
      </Routes>
    </Router>    
  );
}

export default App;