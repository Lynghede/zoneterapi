import React from "react";
import StyledMenu from "./Menu.styled";
import PriceTag from "../SVG/Price.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="Forside">
          &#x1F3E0;
        </span>
        Forside
      </a>
      <a href="/booking">
        <span role="img" aria-label="Booking">
          &#x1F5D3;
        </span>
        Booking
      </a>
      <a href="/priser">
        <span role="img" aria-label="Priser">
          &#x1f4b8;
        </span>
        Priser
      </a>
      <a href="/zoneterapi">
        <span role="img" aria-label="Zoneterapi">
          &#x1F463;{" "}
        </span>
        Zoneterapi
      </a>
      <a href="/about">
        <span role="img" aria-label="Om mig">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Om mig
      </a>
      <a href="/contact">
        <span role="img" aria-label="Kontakt">
          &#x1f4e9;
        </span>
        Kontakt
      </a>
    </StyledMenu>
  );
};
export default Menu;
