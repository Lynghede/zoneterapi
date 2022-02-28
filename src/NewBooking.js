import React, { useState } from "react";
import styled from "styled-components";

// Components
import NavBar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import { BookingButton } from "./Components/Button";
import Progress, { Filler } from "./Components/ProgressBar/Progress.styled";
import Header from "./Components/Header";
import { Page } from "./Components/Wrapper";
import MapContent from "./Components/Map/Map";

// SVG
import { TickNegative, TickConfirmed } from "./Components/SVG/Tick.styled";
import PriceDisplay from "./Components/Display/PriceDisplay";
import PriceTag from "./Components/SVG/Price.styled";
import MassageIcon from "./Components/SVG/Massage.styled";

// Sites
import Reservation from "./Reservation/Reservation";

const PriceContainer = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);
`;

function NewBooking() {
  const [quantity, setQuantity] = useState(-1);
  const [numDone, setNumDone] = useState(0);

  let percentage;
  if (quantity === -1) {
    percentage = 0;
  } else {
    percentage = 33 + (numDone / quantity) * 33;
  }

  function handleClick(e) {
    setQuantity(parseInt(e.target.value, 10));
  }

  return (
    <Page>
      <NavBar title="Booking"></NavBar>
      <MassageIcon />
      <Header>booking</Header>
      <Seperator />
      <article>
        Hvis du ønsker at booke en behandling, så kan du lave en tidsbestilling
        ved at sende mig en sms på 61609064.
      </article>
      <div>
        <PriceTag style={{ marginTop: "10px" }} />
        <h2 style={{ marginTop: "0px" }}>Priser</h2>
        <Seperator />
        <article>
          En behandling må påregnes at vare 60 min., heraf minimum 45 min.
          zoneterapi.
        </article>
        <PriceContainer>
          <PriceDisplay treatment="1 Behandling" price="425 KR"></PriceDisplay>
          <PriceDisplay
            treatment="3 Behandlinger"
            price="1.125 KR"
            pricePr="(375 KR. PR.)"
          ></PriceDisplay>
          <PriceDisplay
            treatment="5 Behandlinger"
            price="1.800 KR"
            pricePr="(360 KR. PR.)"
          ></PriceDisplay>
          <PriceDisplay
            treatment="10 Behandlinger"
            price="3.400 KR"
            pricePr="(340 KR. PR.)"
          ></PriceDisplay>
        </PriceContainer>

        <article>
          Den første behandling tager ca. 5 kvarter, grundet en forsamtale for
          at afklare de gener og udfordringer, du kommer med og for at tilpasse
          behandlingen mod den ønskede virkning.
        </article>
      </div>
      <MapContent></MapContent>
      <Seperator />
    </Page>
  );
}

export default NewBooking;
