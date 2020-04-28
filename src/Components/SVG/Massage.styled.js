import React from "react";
import Styled from "styled-components";
import { ReactComponent as Massage } from "./massage.svg";
import Wrapper from "../Wrapper";

const MassageFeet = Styled(Massage)`
height: 50px;
width: 50px;
background: transparent;
margin-top: 10px;
color: white;
`;

const MassageIcon = () => {
  return (
    <Wrapper>
      <MassageFeet />
    </Wrapper>
  );
};

export default MassageIcon;
