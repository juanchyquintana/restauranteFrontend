import React from "react";
import './whatsappIcono.css';
import logoWhatsapp from './img/whatsapp-logo.png';

const WhatsappIcono = () => {
  return (
    <img
      src={logoWhatsapp}
      alt="WhatsApp"
      className="whspIcono"
    />
  );
};

export default WhatsappIcono;