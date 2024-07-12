import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentMethod from './components/PaymentMethod';
import PixPayment from './components/PixPayment';
import CreditCardPayment from './components/CreditCardPayment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentMethod />} />
        <Route path="/pix-payment" element={<PixPayment />} />
        <Route path="/credit-card-payment" element={<CreditCardPayment />} />
      </Routes>
    </Router>
  );
}

export default App;
