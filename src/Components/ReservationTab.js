import React from "react";
import styled from "styled-components";
import device from "../Device";

const ReservationTab = styled.div`
  //height: 185px;
  //width: 200px;
  max-width: 300px;
  border-radius: 3px;
  border-width: 2px;
  border-color: palevioletred;
  border-style: solid;
  background-color: transparent;
  padding: 1em;
  margin: 2em;
  overflow-wrap: break-word;

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
