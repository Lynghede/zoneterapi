import React from "react";
import StyledFooter, { StyledItem1 } from "./Footer.styled";
import Home from "../Home/Home";
import Styled from "styled-components";
import Wrapper from "../Wrapper";
import FacebookIcon from "../SVG/Facebook.styled";

const Copyright = Styled.p`
opacity: 30%;
font-size: 0.5em;


`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledItem1>
        <Home></Home>
      </StyledItem1>

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
      <StyledItem1>
        {" "}
        <a href="/contact">
          <span role="img" aria-label="Kontakt"></span>
          Kontakt
        </a>
      </StyledItem1>
      <Wrapper>
        {" "}
        <Copyright>© Copyright 2020 - Lissi Lynghede</Copyright>
      </Wrapper>
      <a href="https://www.facebook.com/Lissi-Lynghede-380928912748443">
        <FacebookIcon />
      </a>
    </StyledFooter>
  );
};
export default Footer;
