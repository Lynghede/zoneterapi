import React from "react";
import StyledFooter, { StyledItem1 } from "./Footer.styled";
import Home from "../Home/Home";
import Styled from "styled-components";
import Wrapper from "../Wrapper";
import FacebookIcon from "../SVG/Facebook.styled";
import { Link } from "react-router-dom";

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

      <Link to="/booking">
        <span role="img" aria-label="Booking"></span>
        Booking
      </Link>

      <Link to="/priser">
        <span role="img" aria-label="Produkter"></span>
        Priser
      </Link>
      <Link to="/zoneterapi">
        <span role="img" aria-label="Zoneterapi"></span>
        Zoneterapi
      </Link>
      <Link to="/about">
        <span role="img" aria-label="Om mig"></span>
        Om mig
      </Link>
      <StyledItem1>
        {" "}
        <Link to="/contact">
          <span role="img" aria-label="Kontakt"></span>
          Kontakt
        </Link>
      </StyledItem1>
      <Wrapper>
        {" "}
        <Copyright>© Copyright 2020 - Lissi Lynghede | CVR-nr: 25 96 14 98 </Copyright>
      </Wrapper>
     
      <a href="https://www.facebook.com/Lissi-Lynghede-380928912748443">
        <FacebookIcon />
      </a>
    </StyledFooter>
  );
};
export default Footer;
