import React, { useState, useRef } from "react";
import useOnClickOutside from "../../hooks";

import StyledNavBar from "./NavBar.styled";
import Home from "../Home/Home";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";

const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  // function titleMofo() {
  //     let { slug } = useParams();
  //     return <header>{slug}</header>;
  //   }

  return (
    <StyledNavBar isTranparent={props.isTransparent}>
      <Home />
      <header>{props.title}</header>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
