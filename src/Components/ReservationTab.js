import React from "react";
import styled from "styled-components";

const ReservationTab = styled.p`
  height: 152px;
  width: 200px;
  border-radius: 3px;
  border-width: 2px;
  border-color: palevioletred;
  border-style: solid;
  background-color: transparent;
  padding: 1em;
  margin: 2em;

  & h1 {
    text-align: center;
    font-size: large;
    color: white;
    text-decoration: underline;
  }

  & ol {
    text-align: left;
    padding: 0;
  }
`;

export default ReservationTab;
