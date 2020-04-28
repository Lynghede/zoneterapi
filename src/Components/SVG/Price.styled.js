import React from "react";
import Styled from "styled-components";
import { ReactComponent as PriceTag } from "./price.svg";
import Wrapper from "../Wrapper";

const PriceSVG = Styled(PriceTag)`
height: 40px;
width: 40px;
background: transparent;
margin-top: 10px;
`;

const Price = () => {
  return (
    <Wrapper>
      <PriceSVG />
    </Wrapper>
  );
};

export default Price;
