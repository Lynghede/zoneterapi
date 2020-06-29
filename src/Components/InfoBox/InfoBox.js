import React from "react";
import { BoxContainer, Box, SVGWrapper, BoxAnimation } from "./InfoBox.styled";
import MassageIcon from "../SVG/Massage.styled";

import { PHeader2, PHeader3 } from "../Headers/PHeader";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoBox = (props) => {
  return (
    <BoxContainer style={{ display: "flex" }}>
      <Box color={props.color}>
        <SVGWrapper>
          <MassageIcon></MassageIcon>
        </SVGWrapper>

        <BoxAnimation>
          {" "}
          <div style={{ flexDirection: "column", flex: "1 1 auto" }}>
            <PHeader2>{props.title}</PHeader2>
            <PHeader3 style={{ flex: "0" }}>{props.subtitle}</PHeader3>
            <div>{props.children}</div>

            {/* <Button margin="10px">Learn more</Button> */}
          </div>
        </BoxAnimation>
      </Box>
    </BoxContainer>
  );
};

export default InfoBox;
