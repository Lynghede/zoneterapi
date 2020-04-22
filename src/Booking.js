import React, { useState, useRef, useEffect } from "react";

import NavBar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import Button, { BookingButton } from "./Components/Button";
import Footer from "./Components/Footer/Footer";
import Progress, { Filler } from "./Components/ProgressBar/Progress.styled";
import Tick, {
  TickNegative,
  TickConfirmed,
} from "./Components/SVG/Tick.styled";
import Header from "./Components/Header";

import Reservation from "./Reservation/Reservation";

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
        <h2>Priser</h2>
        <Seperator />
        <p>
          En behandling må påregnes at vare 60 min, heraf min. 45 minutters
          zoneterapi.
        </p>
        <ul>
          <li>1 behandling - 425 kr</li>
          <li>3 behandlinger - 1.125 kr (375 kr/pr)</li>
          <li>5 behandlinger - 1.800 kr (360 kr/pr)</li>
          <li>10 behandlinger - 3.400 kr (340 kr/pr)</li>
        </ul>
        <p>
          Den første behandling tager ca. 5 kvarter, grundet en for samtale, for
          at afklare de gener og udfordringer du kommer med og for at tilpasse
          behandlingen mod den ønskede virkning.
        </p>
      </div>
      <Seperator />
    </>
  );
}

export default Booking;
