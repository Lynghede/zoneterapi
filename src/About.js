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
import Image from "./Components/IMG/Img";



function About () {
  
    return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyles/>
        <NavBar title="Om mig">
          
        </NavBar>
        <div>
            <h1>Om behandleren</h1>
            <Seperator/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque laoreet. Lectus urna duis convallis convallis tellus id. Quam lacus suspendisse faucibus interdum posuere lorem. Nisl pretium fusce id velit ut tortor pretium.
            </p>
            <Wrapper>
               <Image src="https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/1619290_10202823778649795_9176068601466896719_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=u1TTeB94x-sAX9djIbe&_nc_ht=scontent-cph2-1.xx&oh=70e7220fd416a656f0a45d9b6947114c&oe=5E96739A"/>
               </Wrapper>
            
        </div>
        <div>
            <h2>Uddannelse</h2>
            <Seperator/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque laoreet. Lectus urna duis convallis convallis tellus id. Quam lacus suspendisse faucibus interdum posuere lorem. Nisl pretium fusce id velit ut tortor pretium.
            </p>
        </div>
        
        </>
        <Footer /> 
       
        </ThemeProvider>
 ); }

export default About;