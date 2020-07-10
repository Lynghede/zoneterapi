import React from "react";
import StyledBurger from "./Burger.styled";
import styled from "styled-components";

const Square = styled.div`
  display: flex;
  border: 2px solid white;
  position: absolute;
  top: 4%;
  right: 16px;
  padding: 0px 6px 6px 6px;
`;

const Burger = ({ open, setOpen }) => {
  return (
    <Square>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </Square>
  );
};

export default Burger;
