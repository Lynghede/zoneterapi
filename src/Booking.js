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
            <p>En sesssion består hovedsageligt af 45 minutters zoneterapi.</p>
            <ul>
                <li>1 session - 500 kr</li>
                <li>2 sessions - 900 kr (450 kr/pr)</li>
                <li>3 sessions - 1200 kr (400 kr/pr)</li>
                <li>4 sessions - 1400 kr (350 kr/pr)</li>
                <li>5 sessions - 1500 kr (300 kr/pr)</li>
            </ul>
            <p>Første gang vi mødes, vil der gå 10 minutter til en samtale, om patientens laster og gener. 
                Dette vil blive brugt til at målrette behandlingen, mod den ønskede virkning.</p>
        </div>
        
        </><Footer />
    </ThemeProvider>
);
}

export default Booking;