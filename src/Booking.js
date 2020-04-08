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

function Booking () {
    
return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
        <NavBar title="Booking">
          
        </NavBar>
        <div>
            <h1>Behandlinger</h1>
            <Seperator/>
              <Wrapper>
                <BookingButton>1</BookingButton>
                <BookingButton>2</BookingButton>
                <BookingButton>3</BookingButton>
                              
              </Wrapper>
            <Wrapper> <BookingButton>4</BookingButton><BookingButton>5</BookingButton></Wrapper>

        </div>
        <div>
            <h2>Priser</h2>
            <Seperator/>
            <p>En behandling må påregnes at vare 60 min, heraf min. 45 minutters zoneterapi.</p>
        <ul>
            <li>1 behandling - 425 kr</li>
            <li>3 behandlinger - 1.125 kr (375 kr/pr)</li>
            <li>5 behandlinger - 1.800 kr (360 kr/pr)</li>
            <li>10 behandlinger - 3.400 kr (340 kr/pr)</li>
            
        </ul>
        <p>Den første behandling tager ca. 5 kvarter, grundet en for samtale, for at afklare de
            gener og udfordringer du kommer med og for at tilpasse behandlingen mod den ønskede virkning.
            </p>
            </div>
        
        </><Footer />
    </ThemeProvider>
);
}

export default Booking;