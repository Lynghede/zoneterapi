import React from "react";
import styled from "styled-components";
// Components
import NavBar from "./Components/Navbar/Navbar";
import Seperator from "./Components/Seperator";
// SVG
import PriceDisplay from "./Components/Display/PriceDisplay";
import DefaultDisplay from "./Components/Display/Display";
import PriceIcon from "./Components/SVG/Price.styled";
import AdviceIcon from "./Components/SVG/Advice.styled";

const PriceContainer = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);
`;

const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function Priser() {
  return (
    <>
      <NavBar title="Priser"></NavBar>
      <div>
        <PriceIcon></PriceIcon>
        <h1 style={{ marginTop: "0px" }}>Priser</h1>

        <Seperator />
        <article>
          En behandling må påregnes at vare 60 min, heraf min. 45 minutters
          zoneterapi.
          <br></br>
          <br></br>
          Den første behandling tager ca. 5 kvarter, grundet en for samtale, for
          at afklare de gener og udfordringer du kommer med og for at tilpasse
          behandlingen mod den ønskede virkning.
          <PriceContainer>
            <PriceDisplay
              treatment="1 Behandling"
              price="425 kr"
            ></PriceDisplay>
            <PriceDisplay
              treatment="3 Behandlinger"
              price="1.125 kr"
              pricePr="(375 kr/pr)"
            ></PriceDisplay>
            <PriceDisplay
              treatment="5 Behandlinger"
              price="1.800 kr"
              pricePr="(360 kr/pr)"
            ></PriceDisplay>
            <PriceDisplay
              treatment="10 Behandlinger"
              price="3.400 kr"
              pricePr="(340 kr/pr)"
            ></PriceDisplay>
          </PriceContainer>
        </article>
        <AdviceIcon />
        <h2>Fem gode grunde til at gå til zoneterapeaut</h2>
        <Seperator />
        <article>
          Uanset hvilken lidelse, du har, kan zoneterapi hjælpe dig videre.
          Terapien er også god, hvis du vil vedligeholde et godt helbred.
          <br></br>
          <br></br>
          Nogle gange kan zoneterapi stå alene som behandlingsform, andre gange
          som supplement til konventionel behandling. Mange kombinerer
          traditionel behandling med zoneterapi.
          <DisplayContainer>
            <DefaultDisplay text="Zoneterapi styrker balancer i krop og psyke" />
            <DefaultDisplay text="Zoneterapi kan fremme din almene sundhed" />
            <DefaultDisplay text="Zoneterapi kan lindre smerter" />
            <DefaultDisplay text="Zoneterapi er effektiv som behandling af en række lidelser" />
            <DefaultDisplay text="Zoneterapi bygger på et helhedssyn på dig og dit liv" />
          </DisplayContainer>
        </article>
      </div>
      <Seperator />
    </>
  );
}

export default Priser;
