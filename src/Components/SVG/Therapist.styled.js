import React from "react";
import Styled from "styled-components";
import { ReactComponent as Therapist } from "./therapist1.svg";
import Wrapper from "../Wrapper";

const TherapistTag = Styled(Therapist)`
height: 50px;
width: 50px;
background: transparent;
margin-top: 10px;
color: white;
`;

const TherapistIcon = () => {
  return (
    <Wrapper>
      <TherapistTag />
    </Wrapper>
  );
};

export default TherapistIcon;
