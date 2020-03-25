import React from 'react';
import { BroswerRouter as Router, Switch, Route, Link } from "react-router-dom";
import FrontPage from './FrontPage';
import Booking from './Booking';
import Priser from './Priser';
import ContactPage from './ContactPage';


function Routes () {
    return (
        <Router>
            <div>
            <ul>
                <li>
                    <Link to="/">Forside</Link>
                </li>
                <li>
                    <Link to="/Booking">Booking</Link>
                </li>
                <li>
                    <Link to="/Priser">Priser</Link>
                </li>
                <li>
                    <Link to="/About">Om mig</Link>
                </li>
                <li>
                    <Link to="/Contact">Kontakt</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/">
                    <FrontPage />
                </Route>
                <Route path="/Booking">
                    <Booking/>
                </Route>
                <Route path="/Priser">
                    <Priser />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Contact">
                    <ContactPage/>
                </Route>
            </Switch>
            </div>
        </Router>
    )
}


export default Routes;