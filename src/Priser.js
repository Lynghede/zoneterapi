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



function Priser () {
   
    return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyles/>
        <NavBar title="Priser">
         
        </NavBar>
        <div>
            <h1>Priser</h1>
            <Seperator/>
            <article>En behandling må påregnes at vare 60 min, heraf min. 45 minutters zoneterapi.
        <ul>
            <li>1 behandling - 425 kr</li>
            <li>3 behandlinger - 1.125 kr (375 kr/pr)</li>
            <li>5 behandlinger - 1.800 kr (360 kr/pr)</li>
            <li>10 behandlinger - 3.400 kr (340 kr/pr)</li>
            
        </ul>
        Den første behandling tager ca. 5 kvarter, grundet en for samtale, for at afklare de
            gener og udfordringer du kommer med og for at tilpasse behandlingen mod den ønskede virkning.
    </article>
    <h2>Fem gode grunde til at gå til zoneterapeaut</h2>
            <Seperator/>
            <article>
        <ul>
            <li>Zoneterapi styrker balancer i krop og psyke</li>
            <li>Zoneterapi kan fremme din almene sundhed</li>
            <li>Zoneterapi kan lindre smerter</li>
            <li>Zoneterapi er effektiv som behandling af en række lidelser</li>
            <li>Zoneterapi bygger på et helhedssyn på dig og dit liv</li>
        </ul>
        Uanset hvilken lidelse, du har, kan zoneterapi hjælpe dig videre. Terapien er også god, hvis du vil vedligeholde et godt helbred.
            <br></br>
            <br></br>
            Nogle gange kan zoneterapi stå alene som behandlingsform, andre gange som supplement til konventionel behandling. Mange kombinerer traditionel behandling med zoneterapi.
        </article>
        </div>
       
        </>
        <Footer /> 
       
        </ThemeProvider>
 ); }

export default Priser;