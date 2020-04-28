import React from "react";
import Styled from "styled-components";
import { ReactComponent as Motivation } from "./motivation.svg";
import Wrapper from "../Wrapper";

const MotivationTag = Styled(Motivation)`
height: 50px;
width: 50px;
background: transparent;
margin-top: 10px;
color: white;
`;

const MotivationIcon = () => {
  return (
    <Wrapper>
      <MotivationTag />
    </Wrapper>
  );
};

export default MotivationIcon;
