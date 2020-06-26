import React from "react";

// Components

import {
  HoriozontalBoxContainer,
  HoriozontalImageContainer,
  HoriozontalContent,
  HoriozontalFooter,
} from "./HoriozontalBox.styled";
import { Img } from "../Images/Image";

const HoriozontalBox = (props) => {
  return (
    <HoriozontalBoxContainer>
      <HoriozontalImageContainer>
        <Img src={props.src}></Img>
      </HoriozontalImageContainer>
      <HoriozontalContent>
        <h4>{props.header}</h4>
        <h5>{props.text}</h5>
      </HoriozontalContent>
      <HoriozontalFooter>
        <p>Read customer story --> </p>
      </HoriozontalFooter>
    </HoriozontalBoxContainer>
  );
};

export default HoriozontalBox;
