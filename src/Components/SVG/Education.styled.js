import React from "react";
import Styled from "styled-components";
import { ReactComponent as Education } from "./education.svg";
import Wrapper from "../Wrapper";

const EducationTag = Styled(Education)`
height: 50px;
width: 50px;
background: transparent;
margin-top: 10px;
color: white;
`;

const EducationIcon = () => {
  return (
    <Wrapper>
      <EducationTag />
    </Wrapper>
  );
};

export default EducationIcon;
