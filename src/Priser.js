import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import useOnClickOutside from "./hooks";

import Burger from "./Components/Burger/Burger";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home/Home";
import NavBar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import Button, { BookingButton } from "./Components/Button";
import Footer from "./Components/Footer/Footer";



function Priser () {
    const [open, setOpen] = useState(false);
     const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    

    return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyles/>
        <NavBar>
          <Home />
          <header>Priser</header>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </NavBar>
        <div>
            <h1>Produkter</h1>
            <Seperator/>
            <h2>zoneterapi</h2>
            <Seperator/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque laoreet. Lectus urna duis convallis convallis tellus id. Quam lacus suspendisse faucibus interdum posuere lorem. Nisl pretium fusce id velit ut tortor pretium.
            </p>
        </div>
        <div>
            <h2>clairvoyance</h2>
            <Seperator/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque laoreet. Lectus urna duis convallis convallis tellus id. Quam lacus suspendisse faucibus interdum posuere lorem. Nisl pretium fusce id velit ut tortor pretium.
            </p>
        </div>
        <div>
            <h2>healing</h2>
            <Seperator/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque laoreet. Lectus urna duis convallis convallis tellus id. Quam lacus suspendisse faucibus interdum posuere lorem. Nisl pretium fusce id velit ut tortor pretium.
            </p>
        </div>
        <div>
            <h1>Priser</h1>
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
        </>
        <Footer /> 
       
        </ThemeProvider>
 ); }

export default Priser;