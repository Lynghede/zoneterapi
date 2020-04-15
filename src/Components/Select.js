import styled from "styled-components";
import React from "react";
import Select from "react-select";

export const monthStyle = {
  control: (styles) => ({
    ...styles,
    maxWidth: "300px",
    color: "palevioletred",
    width: "300px",
  }),
  menu: (styles) => ({
    ...styles,
    width: "300px",
    justifyContent: "center",
  }),
};

export const ColorStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",

    marginBottom: "10px",
    minHeight: "",
    padding: "",
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    height: "10px",
    itemsAlign: "center",
    justifyContent: "center",
    margin: "auto",
  }),
  menu: (styles) => ({
    ...styles,
    height: "inherient",
    borderRadius: "4px",
    top: "auto",
    // bottom: "100%",

    textAlign: "center",
  }),
  menuList: (isFocused) => ({
    ...isFocused,
    borderRadius: "4px",
  }),
};

export const Foo = styled(Select)`
  font-size: small;
  backgroundcolor: "white";
  color: palevioletred;
  min-width: 10px;
`;

export default Foo;
