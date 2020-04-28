import React from "react";
import styled from "styled-components";

export const DisplayContainer = styled.div`
  width: var(--cell-size);
  display: flex;
  justify-content: center;
  items-align: center;
`;

export const Display1 = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(237, 236, 244, 1) 0%,
    rgba(113, 204, 224, 1) 0%,
    rgba(0, 72, 105, 1) 100%
  );
  color: black;

  width: 130px;
  height: 130px;
  text-align: center;
  padding: 15px;
  font-size: 1em;
  margin: 5%;

  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    width: 150px;
    height: 150px;
    padding-top: 35px;
  }

  @media screen and (min-width: ${({ theme }) => theme.pc}) {
    width: 200px;
    height: 200px;
    padding-top: 60px;
  }
`;

const DefaultDisplay = (props) => {
  return (
    <DisplayContainer>
      <Display1>{props.text}</Display1>
    </DisplayContainer>
  );
};

export default DefaultDisplay;
