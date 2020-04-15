import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import useOnClickOutside from "./hooks";

import Burger from "./Components/Burger/Burger";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home/Home";
import NavBar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import Button, { BookingButton } from "./Components/Button";
import Footer from "./Components/Footer/Footer";
import App from "./App";
import Reservation from "./Reservation/Reservation";

function Booking() {
  const [quantity, setQuantity] = useState(-1);

  function handleAdd() {
    if (quantity !== 0) setQuantity(quantity - 1);
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar title="Booking"></NavBar>
        {quantity === -1 ? (
          <>
            {console.log("this is quantity: " + quantity)}
            <div>
              <h1>Behandlinger</h1>
              <Seperator />

              <div>
                <Wrapper>
                  <BookingButton
                    value={1}
                    onClick={(e) => setQuantity(e.target.value)}
                  >
                    1
                  </BookingButton>
                  <BookingButton
                    value={3}
                    onClick={(e) => setQuantity(e.target.value)}
                  >
                    3
                  </BookingButton>
                </Wrapper>
                <Wrapper>
                  <BookingButton
                    value={5}
                    onClick={(e) => setQuantity(e.target.value)}
                  >
                    5
                  </BookingButton>
                  <BookingButton
                    value={10}
                    onClick={(e) => setQuantity(e.target.value)}
                  >
                    10
                  </BookingButton>
                  {console.log(quantity)}
                </Wrapper>
              </div>
            </div>
            <div>
              <h2>Priser</h2>
              <Seperator />
              <p>
                En behandling må påregnes at vare 60 min, heraf min. 45
                minutters zoneterapi.
              </p>
              <ul>
                <li>1 behandling - 425 kr</li>
                <li>3 behandlinger - 1.125 kr (375 kr/pr)</li>
                <li>5 behandlinger - 1.800 kr (360 kr/pr)</li>
                <li>10 behandlinger - 3.400 kr (340 kr/pr)</li>
              </ul>
              <p>
                Den første behandling tager ca. 5 kvarter, grundet en for
                samtale, for at afklare de gener og udfordringer du kommer med
                og for at tilpasse behandlingen mod den ønskede virkning.
              </p>
            </div>
          </>
        ) : (
          <div>
            <Reservation quantity={quantity} onComplete={handleAdd} />
          </div>
        )}
      </>
      <Seperator />
      <Footer />
    </ThemeProvider>
  );
}

export default Booking;
