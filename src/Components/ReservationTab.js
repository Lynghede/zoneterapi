import React from "react";
import styled from "styled-components";

const ReservationTab = styled.div`
  height: 2000px;
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

  :active {
    opacity: 50%;
  }
`;

export const ReservationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default ReservationTab;