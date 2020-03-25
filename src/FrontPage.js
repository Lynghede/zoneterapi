import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import useOnClickOutside from "./hooks";
// import { Burger, Menu } from "./Components";
import Burger from "./Components/Burger/Burger";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home/Home";
import NavBar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import Button, { LargerButton } from "./Components/Button";
import Footer from "./Components/Footer/Footer";

function FrontPage() {
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar title="Lissi Lynghede">
          
        </NavBar>
        
        <div>
          <h1>Zoneterapi</h1>
          <Seperator />
          <p>
            Zoneterapi er en behandlingsform, som via tryk og massage på de
            forskellige reflekszoner under fødderne, sætter skub i kroppens egne
            energier. Blodgennemstrømningen øges i området og der kommer ny
            energi til, således at affaldsstofferne skaffes bort. Alle kan have
            stor glæde af zoneterapi! Det er nemlig genvejen til større velvære,
            ligesom behandlingen er forebyggende, før eventuelle skavanker
            opstår. Det handler med andre ord om at bevare en krop i balance.
          </p><Wrapper>
            <LargerButton>Bestil Tid</LargerButton>
          </Wrapper>
          <Seperator />
          
        </div>
        <div>
          <h2>Behandleren</h2>
          <Seperator />
          <p>
            {" "}
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo
          </p>
        </div>

        {/* <div>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </div> */}
      </>
      <Seperator />
      <Footer></Footer>
    </ThemeProvider>
  );
}
export default FrontPage;
