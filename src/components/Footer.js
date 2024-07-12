import React from 'react';
import ShieldLogo from './SVG/Shield';
import LogoDark from './SVG/LogoDark';
import './css/Footer.css';

const Footer = () => (
    <label className='footer'>
        <ShieldLogo /> Pagamento 100% seguro via: <LogoDark />
    </label>
);

export default Footer;
