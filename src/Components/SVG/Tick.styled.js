import React from "react";
import { ReactComponent as Tick } from "./tickNegative.svg";
import { ReactComponent as TickConfirm } from "./tickConfirm.svg";
import Styled from "styled-components";

export const TickMofo = Styled(Tick)`
height: 30px;
width: 30px;


`;

export const TickConfirmed = Styled(TickConfirm)`
height: 30px;
width: 30px;
position: absolute;
justify-content: center;
z-index: 1;
border-radius: 100px;
border: 1px solid;
background: white;
top: -30%;


:first-child{
  left: 28%; 
}

:nth-child(2){
  left: 60%;
}

:nth-child(3){
  left: 93%;
}
@media screen and (min-width: ${({ theme }) => theme.tablet}){
  :first-child{
  left: 30%; 
}

:nth-child(2){
  left: 63%;
}

:nth-child(3){
  left: 97%;
}

@media screen and (min-width: ${({ theme }) => theme.pc}){
  :first-child{
  left: 32%; 
}

:nth-child(2){
  left: 65%;
}

:nth-child(3){
  left: 99%;
}
}


`;

export const TickNegative = Styled(Tick)`
height: 30px;
width: 30px;
position: absolute;
justify-content: center;
z-index: 1;
left: 96%;
top: -30%;
border-radius: 100px;
border: 1px solid;
background: #ffd295;
border-color: #ffd295;

:first-child{
  left: 28%; 
}

:nth-child(2){
  left: 60%;
}

:nth-child(3){
  left: 93%;
}

@media screen and (min-width: ${({ theme }) => theme.tablet}){
  :first-child{
  left: 30%; 
}

:nth-child(2){
  left: 63%;
}

:nth-child(3){
  left: 97%;
}

@media screen and (min-width: ${({ theme }) => theme.pc}){
:first-child{
  left: 32%; 
}

:nth-child(2){
  left: 65%;
}

:nth-child(3){
  left: 99%;
}
}
`;

const TickStyled = () => {
  return <TickMofo></TickMofo>;
};

export default TickStyled;

/* <Tick
        style={{ height: "30px", width: "30px", fill: "blue", zIndex: "100" }}
      ></Tick> */
