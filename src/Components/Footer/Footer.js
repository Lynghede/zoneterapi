import React from "react";
import StyledFooter, { StyledItem1 } from "./Footer.styled";
import Home from "../Home/Home";

const Footer = () => {
  return (
    <StyledFooter>
      
      <StyledItem1><Home></Home></StyledItem1>
        
     <a href="/booking">
        <span role="img" aria-label="Booking"></span>
        Booking
      </a>
      
      <a href="/priser">
        <span role="img" aria-label="Produkter"></span>
        Priser
      </a>
      <a href="/zoneterapi">
            <span role="img" aria-label="Zoneterapi"></span>
            Zoneterapi
        </a>
      <a href="/about">
        <span role="img" aria-label="Om mig"></span>
        Om mig
      </a>
      <StyledItem1> <a href="/contact">
        <span role="img" aria-label="Kontakt"></span>
        Kontakt
      </a></StyledItem1>
     
    </StyledFooter>
  );
};
export default Footer;
