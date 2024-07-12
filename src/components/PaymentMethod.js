import React from 'react';
import './css/PaymentMethod.css';
import Logo from './SVG/Logo';
import Footer from './Footer';
import TimesIcon from './SVG/Times'

import { Container, Typography, Radio, RadioGroup, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const installments = [
  { value: 'pix', label: 'R$ 30.500,00', total: '', cashback: 'Ganhe 3% de Cashback', banner: '🤑 <strong>R$ 300,00</strong> de volta no seu Pix na hora' },
  { value: 'pix-parcelado-2', label: 'R$ 15.300,00', total: 'Total: R$ 30.600,00' },
  { value: 'pix-parcelado-3', label: 'R$ 10.196,66', total: 'Total: R$ 30.620,00' },
  { value: 'pix-parcelado-4', label: 'R$ 7.725,00', total: 'Total: R$ 30.900,00', banner: '<strong>-3% de juros:</strong> Melhor opção de parcelamento' },
  { value: 'pix-parcelado-5', label: 'R$ 6.300,00', total: 'Total: R$ 31.500,00' },
  { value: 'pix-parcelado-6', label: 'R$ 5.283,33', total: 'Total: R$ 31.699,98' },
  { value: 'pix-parcelado-7', label: 'R$ 4.542,85', total: 'Total: R$ 31.800,00' }
];

const PaymentMethod = () => {
  const [value, setValue] = React.useState('pix-parcelado-2');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleNext = () => {
    if (value.includes('pix-parcelado')) {
      navigate('/pix-payment');
    } else {
      navigate('/credit-card-payment');
    }
  };

  return (
    <Container className="payment-method-container">
      <div className="text-center">
        <Logo className="logo" />
      </div>
      <Typography className="payment-method-header" gutterBottom>João, como você quer pagar?</Typography>
      <RadioGroup aria-label="payment-method" name="payment-method" value={value} onChange={handleChange} className="radio-group">
        {installments.map((installment, index) => (
          <div key={installment.value}>
            {!index && <div className='label-pix'><Typography className="installment-category">Pix</Typography></div>}
            {index === 1 && <div className='label-pix'><Typography className="installment-category">Pix Parcelado</Typography></div>}
            <Button
              className={
                `${value === installment.value ? "installment selected" : "installment"} 
                ${!index || index === 1 ? "group" : ""}
                ${index === 0 || index === installments.length - 1 ? "border-bottom" : ""}
                `
              }
              onClick={() => setValue(installment.value)}
            >
              <div className="installment-container">
                <div className='line'>
                  <span className="installment-number">
                    <strong>{index + 1}x</strong> <span className="installment-value">{installment.label}</span>
                  </span>
                  {value === installment.value ? (
                    <div className='circle-radio'>
                      <TimesIcon className="radio-right" style={{ color: 'white' }} />
                    </div>
                  ) : (
                    <Radio className="radio-right" style={{ color: index === 1 ? '#39d69e' : '#eaeaea' }} />
                  )}


                </div>
                <div className='line2'>
                  {installment.total && (
                    <span className="installment-total">{installment.total}</span>
                  )}
                  {installment.cashback && (
                    <span className="cashback">{installment.cashback}</span>
                  )}
                  {installment.banner && (
                    <div
                      className="blue-banner"
                      dangerouslySetInnerHTML={{ __html: installment.banner }}
                    />
                  )}
                </div>
              </div>
            </Button>
          </div>
        ))}
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={handleNext} className='button-pix'>Gerar PIX</Button>
      <Footer />
    </Container>
  );
};

export default PaymentMethod;
