// import styled from "styled-components";
import React from "react";
// import { ReactComponent as LogoFront } from "/home/moly/lyvner-mollen/src/Components/SVG/LogoFront.svg";
import { ReactComponent as LogoFront } from "../SVG/LogoFront.svg";
// /home/morten/dev/lyvner-mollen/src/Components/SVG/LogoFront.svg

const Home = () => {
  return (
    <a href="/">
      <LogoFront style={{ marginTop: "1px" }} />
    </a>
  );
};
export default Home;
