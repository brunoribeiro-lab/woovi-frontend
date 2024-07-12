import React from 'react';
import './css/PixPayment.css';
import Logo from './SVG/Logo';
import CopyIcon from './SVG/Copy';
import ArrowUpIcon from './SVG/ArrowUp';
import Footer from './Footer';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SessionID from './SessionID';

const PixPayment = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/credit-card-payment');
  };

  return (
    <Container className="pix-payment-container">
      <div className="text-center">
        <Logo className="logo" />
      </div>
      <Typography className='payment-method-header' gutterBottom>João, pague a entrada de</Typography>
      <Typography className='payment-method-header-2' gutterBottom>R$ 15.300,00 pelo Pix</Typography>
      <img src="qr-code-placeholder.png" alt="QR Code" className="qr-code" />
      <Button variant="contained" color="primary" className="copy-button" onClick={handleNext}>
        Clique para copiar QR CODE
        <CopyIcon />
      </Button>
      <Typography variant="body1" className="payment-expire-label" gutterBottom>
        Prazo de pagamento
      </Typography>
      <Typography variant="body1" className="payment-date" gutterBottom>
        15/12/2021 - 08:17
      </Typography>
      <div className="timeline">
        <div className="timeline-item selected">
          <div className="circle"></div>
          <Typography variant="body1" className="payment-details">
            1ª entrada no Pix: <strong className="payment-value">R$ 15.300,00</strong>
          </Typography>
        </div>
        <div className="timeline-item">
          <div className="circle"></div>
          <Typography variant="body1" className="payment-details">
            2ª no cartão: <strong className="payment-value">R$ 15.300,00</strong>
          </Typography>
        </div>
      </div>
      <div className='separator' />
      <Typography variant="body1" className="payment-cet">
        CET: 0,5% <span className="payment-value">Total: R$ 30.600,00</span>
      </Typography>
      <div className='separator' />
      <Typography variant="body1" className="payment-cet">
        <strong>Como funciona?</strong> <ArrowUpIcon className="detail-icon" />
      </Typography>
      <div className='separator' />
      <SessionID />
      <Footer />
    </Container>
  );
};

export default PixPayment;
