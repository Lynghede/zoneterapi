import React from "react";
import Styled from "styled-components";
import { ReactComponent as Email } from "./email1.svg";
import Wrapper from "../Wrapper";

const EmailTag = Styled(Email)`
height: 50px;
width: 50px;
background: transparent;
margin-top: 10px;
color: white;
`;

const EmailIcon = () => {
  return (
    <Wrapper>
      <EmailTag />
    </Wrapper>
  );
};

export default EmailIcon;
