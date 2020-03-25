import React from "react";
import StyledFooter from "./Footer.styled";
import Home from "../Home/Home";

const Footer = () => {
  return (
    <StyledFooter>
      <Home></Home>
      <a href="/">
        <span role="img" aria-label="Booking"></span>
        Booking
      </a>
      <a href="/">
        <span role="img" aria-label="Produkter"></span>
        Produkter/Priser
      </a>
      <a href="/">
        <span role="img" aria-label="Om mig"></span>
        Om mig
      </a>
      <a href="/">
        <span role="img" aria-label="Kontakt"></span>
        Kontakt
      </a>
    </StyledFooter>
  );
};
export default Footer;
