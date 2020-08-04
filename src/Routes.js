import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

// Routes
import FrontPage from "./FrontPage";
import About from "./About";
import Booking from "./Booking";
import Confirmed from "./Reservation/ConfirmedReservation";
import Priser from "./Priser";
import ContactPage from "./ContactPage";
import Zoneterapi from "./Zoneterapi";
import Admin from "./Admin";

// Components
import Footer from "./Components/Footer/Footer";

// Function to scroll to top on page change.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Routes() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Router basename="/">
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <FrontPage />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/confirmed">
              <Confirmed />
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
              <ContactPage />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    </ThemeProvider>
  );
}
