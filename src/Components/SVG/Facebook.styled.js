import React from "react";
import Styled from "styled-components";
import { ReactComponent as Facebook } from "./facebook.svg";
import Wrapper from "../Wrapper";

const FacebookTag = Styled(Facebook)`
height: 20px;
width: 20px;
//background: transparent;
//margin-top: 10px;
opacity: 30%;
//color: white;
`;

const FacebookIcon = () => {
  return (
    <Wrapper>
      <FacebookTag />
    </Wrapper>
  );
};

export default FacebookIcon;
