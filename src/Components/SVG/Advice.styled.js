import React from "react";
import Styled from "styled-components";
import { ReactComponent as Advice } from "./advice1.svg";
import Wrapper from "../Wrapper";

const AdviceTag = Styled(Advice)`
height: 50px;
width: 50px;
background: transparent;
margin-top: 10px;
color: white;
`;

const AdviceIcon = () => {
  return (
    <Wrapper>
      <AdviceTag />
    </Wrapper>
  );
};

export default AdviceIcon;
