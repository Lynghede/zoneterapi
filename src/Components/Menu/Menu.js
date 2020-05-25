import React from "react";
import StyledMenu from "./Menu.styled";
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">
        <span role="img" aria-label="Forside">
          &#x1F3E0;
        </span>
        Forside
      </Link>
      <Link to="/booking">
        <span role="img" aria-label="Booking">
          &#x1F5D3;
        </span>
        Booking
      </Link>
      <Link to="/priser">
        <span role="img" aria-label="Priser">
          &#x1f4b8;
        </span>
        Priser
      </Link>
      <Link to="/zoneterapi">
        <span role="img" aria-label="Zoneterapi">
          &#x1F463;{" "}
        </span>
        Zoneterapi
      </Link>
      <Link to="/about">
        <span role="img" aria-label="Om mig">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Om mig
      </Link>
      <Link to="/contact">
        <span role="img" aria-label="Kontakt">
          &#x1f4e9;
        </span>
        Kontakt
      </Link>
    </StyledMenu>
  );
};
export default Menu;
