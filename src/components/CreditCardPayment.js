import React from 'react';
import './css/CreditCardPayment.css';
import Logo from './SVG/Logo';
import Footer from './Footer';
import SessionID from './SessionID';
import ArrowUpIcon from './SVG/ArrowUp';
import { Container, Typography, TextField, Button, MenuItem } from '@mui/material';
import InputMask from 'react-input-mask';

// aqui falta uma validação dos campos, caso seja invalido muda a cor da borda dos inputs e o botão fica disabled
const CreditCardPayment = () => {
  return (
    <Container className="credit-card-payment-container">
      <div className="text-center">
        <Logo className="logo" />
      </div>
      <Typography variant="h4" className="credit-card-payment-header" gutterBottom>João, pague o restante em 1x no cartão</Typography>
      <TextField label="Nome completo" fullWidth margin="normal" className="text-field" />
      <InputMask mask="999.999.999-99">
        {() => <TextField label="CPF" fullWidth margin="normal" className="text-field" />}
      </InputMask>
      <InputMask mask="9999 9999 9999 9999">
        {() => <TextField label="Número do cartão" fullWidth margin="normal" className="text-field" />}
      </InputMask>
      <div className="half-width-container">
        <InputMask mask="99/9999">
          {() => <TextField label="Vencimento" margin="normal" className="text-field half-width" />}
        </InputMask>
        <TextField 
          label="CVV" 
          margin="normal" 
          className="text-field half-width" 
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 4 }} 
        />
      </div>
      <TextField
        label="Parcelas"
        select
        fullWidth
        margin="normal"
        defaultValue="1x R$ 15.300,00"
        className="text-field"
      >
        <MenuItem value="1x R$ 15.300,00">1x R$ 15.300,00</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" className="pay-button">Pagar</Button>
      <Typography variant="body1" className="payment-expire-label" gutterBottom>
        Prazo de pagamento
      </Typography>
      <Typography variant="body1" className="payment-date" gutterBottom>
        15/12/2021 - 08:17
      </Typography>
      <div className="timeline">
        <div className="timeline-item">
          <div className="circle"></div>
          <Typography variant="body1" className="payment-details">
            1ª entrada no Pix: <strong className="payment-value">R$ 15.300,00</strong>
          </Typography>
        </div>
        <div className="timeline-item selected">
          <div className="circle"></div>
          <Typography variant="body1" className="payment-details">
            2ª no cartão: <strong className="payment-value">R$ 15.300,00</strong>
          </Typography>
        </div>
      </div>
      <div className='separator' />
      <Typography variant="body1" className="payment-cet">
        CET: 0,5% <span className="payment-value">Total: R$ 31.500,00</span>
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

export default CreditCardPayment;
