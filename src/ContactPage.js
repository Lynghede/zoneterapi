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


function ContactPage () {
    const [open, setOpen] = useState(false);
     const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    

    return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyles/>
        <NavBar>
          <Home />
          <header>Kontakt</header>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </NavBar>
        <div>
            <h1>Kontakt</h1>
            <Seperator/>
            <p>
            Kunne du tænkte dig yderligere informationer, eller få en uforpligtende snak? Så brug kontaktformularen nedenunder, eller ring til mig.
            </p>
            
            
        </div>
        
        </>
        <Footer /> 
       
        </ThemeProvider>
 ); }

export default ContactPage;