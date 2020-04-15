import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useParams
  } from "react-router-dom";
  import { ThemeProvider } from "styled-components";
  import { GlobalStyles } from "./global";
  import { theme } from "./theme";


import FrontPage from './FrontPage';
import About from './About';
import Booking from './Booking';
import Priser from './Priser';
import ContactPage from './ContactPage';
import Zoneterapi from './Zoneterapi';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Navbar/Navbar';
 


export default function Routes () {
        
    
    return (
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles/>
               
        <Router>
                
            <Switch>
                <Route exact path="/">
                    <FrontPage />
                </Route>
                <Route path="/booking">
                    <Booking/>
                </Route>
                <Route path="/priser">
                    <Priser />
                </Route>
                <Route path="/zoneterapi">
                    <Zoneterapi />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <ContactPage/>
                </Route>
            </Switch>
             
            
            
        </Router>
         </>
        <Footer /> 
        </ThemeProvider>
 ); }


    

