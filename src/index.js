import React from "react";
import ReactDOM from "react-dom";
import { BroswerRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import FrontPage from "./FrontPage";
import Booking from "./Booking";
import Priser from "./Priser";
import About from "./About";
import ContactPage from "./ContactPage"
import { Burger } from "./Components/Burger/Burger";
import { Menu } from "./Components/Menu/Menu";
import Routes from "./Routes";

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
