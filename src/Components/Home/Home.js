// import styled from "styled-components";
import React from "react";
// import { ReactComponent as LogoFront } from "/home/moly/lyvner-mollen/src/Components/SVG/LogoFront.svg";
import { ReactComponent as LogoFront } from "../SVG/LogoFront.svg";
// /home/morten/dev/lyvner-mollen/src/Components/SVG/LogoFront.svg
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link to="/">
      <LogoFront style={{ marginTop: "1px" }} />
    </Link>
  );
};
export default Home;
