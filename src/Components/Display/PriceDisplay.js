import React from "react";
import styled from "styled-components";

export const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  items-align: center;
`;

export const Display = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(237, 236, 244, 1) 0%,
    rgba(113, 204, 224, 1) 0%,
    rgba(0, 72, 105, 1) 100%
  );
  border-style: none !important;
  border-radius: 0px;
  font-size: 0.9em;
  text-transform: uppercase;
  margin: 10px;
  width: 120px;
  height: 120px;
  padding: 20px;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    width: 150px;
    height: 150px;
    font-size: 1em;
  }

  @media screen and (min-width: ${({ theme }) => theme.pc}) {
    border-style: none !important;
    border-radius: 0px;
    font-size: 1.2em;
    margin: 10px;
    width: 180px;
    height: 180px;
    padding: 30px;
  }
`;

const PriceDisplay = (props) => {
  return (
    <DisplayContainer>
      <Display>
        <div>
          <t>
            <b>{props.treatment}</b>
          </t>
          <br></br>
          <br></br>
          <t style={{ fontStyle: "italic" }}>{props.price}</t>
          <br></br>
          <t>{props.pricePr}</t>
        </div>
      </Display>
    </DisplayContainer>
  );
};

export default PriceDisplay;
