import React from "react";
import StyledMenu from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="Forside">
          &#x1F3E0;
        </span>
        Forside
      </a>
      <a href="/">
        <span role="img" aria-label="Booking">
          &#x1F5D3;
        </span>
        Booking
      </a>
      <a href="/">
        <span role="img" aria-label="Produkter">
          &#x1f4b8;
        </span>
        Priser
      </a>
      <a href="/">
        <span role="img" aria-label="Om mig">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Om mig
      </a>
      <a href="/">
        <span role="img" aria-label="Kontakt">
          &#x1f4e9;
        </span>
        Kontakt
      </a>
    </StyledMenu>
  );
};
export default Menu;
