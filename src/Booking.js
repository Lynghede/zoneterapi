import React, { useState } from "react";
import styled from "styled-components";

// Components
import NavBar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import  { BookingButton } from "./Components/Button";
import Progress, { Filler } from "./Components/ProgressBar/Progress.styled";
import Header from "./Components/Header";

// SVG
import  {
  TickNegative,
  TickConfirmed,
} from "./Components/SVG/Tick.styled";
import PriceDisplay from "./Components/Display/PriceDisplay";
import PriceTag from "./Components/SVG/Price.styled";
import MassageIcon from "./Components/SVG/Massage.styled";

// Sites
import Reservation from "./Reservation/Reservation";

const PriceContainer = styled.div`
  display: grid;
  grid-template-columns: var(--grid-columns);
`;

function Booking() {
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
    <>
      <NavBar title="Booking"></NavBar>

      <Header>booking</Header>
      <Seperator />
      <Wrapper>
        <Progress>
          {percentage >= 33 ? <TickConfirmed /> : <TickNegative />}
          {percentage >= 66 ? <TickConfirmed /> : <TickNegative />}
          {percentage >= 100 ? <TickConfirmed /> : <TickNegative />}
          <Filler width={percentage}></Filler>
        </Progress>
      </Wrapper>
      {quantity === -1 ? (
        <div></div>
      ) : (
        <div>
          <Reservation
            quantity={quantity}
            numDone={numDone}
            setNumDone={setNumDone}
          />
        </div>
      )}

      <div>
        <MassageIcon />
        <h2>behandlinger</h2>
        <Seperator />
        <div>
          <Wrapper>
            <BookingButton
              disabled={numDone > 1}
              value={1}
              onClick={(e) => handleClick(e)}
            >
              1
            </BookingButton>
            <BookingButton
              disabled={numDone > 3}
              value={3}
              onClick={(e) => handleClick(e)}
            >
              3
            </BookingButton>
          </Wrapper>
          <Wrapper>
            <BookingButton
              disabled={numDone > 5}
              value={5}
              onClick={(e) => handleClick(e)}
            >
              5
            </BookingButton>
            <BookingButton
              disabled={numDone > 10}
              value={10}
              onClick={(e) => handleClick(e)}
            >
              10
            </BookingButton>
          </Wrapper>
        </div>
      </div>
      <div>
        <PriceTag style={{ marginTop: "10px" }} />
        <h2 style={{ marginTop: "0px" }}>Priser</h2>
        <Seperator />
        <article>
          En behandling må påregnes at vare 60 min, heraf min. 45 minutters
          zoneterapi.
        </article>
        <PriceContainer>
          <PriceDisplay treatment="1 Behandling" price="425 kr"></PriceDisplay>
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

        <article>
          Den første behandling tager ca. 5 kvarter, grundet en for samtale, for
          at afklare de gener og udfordringer du kommer med og for at tilpasse
          behandlingen mod den ønskede virkning.
        </article>
      </div>
      <Seperator />
    </>
  );
}

export default Booking;
