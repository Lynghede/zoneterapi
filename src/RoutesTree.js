import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
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
import NewBooking from "./NewBooking";
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

export default function RoutesTree() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Router basename="/">
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<FrontPage />}></Route>
            <Route path="/booking" element={<NewBooking />}></Route>
            <Route path="/confirmed" element={<Confirmed />}></Route>
            <Route path="/priser" element={<Priser />}></Route>
            <Route path="/zoneterapi" element={<Zoneterapi />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    </ThemeProvider>
  );
}
