import styled from "styled-components";
import React from "react";
import Select from "react-select";

const options = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 }
];

export const ColorStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: "white",
    color: "palevioletred",
    marginBottom: "10px",
    minHeight: "",
    padding: ""
  }),
  indicatorsContainer: styles => ({
    ...styles,
    height: "10px",
    itemsAlign: "center",
    justifyContent: "center",
    margin: "auto"
  }),
  menu: styles => ({
    ...styles,
    height: "inherient",
    borderRadius: "4px"
  }),
  menuList: isFocused => ({
    ...isFocused,
    borderRadius: "4px"
  })
};

export const Foo = styled(Select)`
  font-size: small;
  backgroundcolor: "white";
  color: palevioletred;
  min-width: 10px;
`;

// function MySelect(props) {
//   return <Foo {...props} />;
// }

// const Select = styled.select`
//   width: auto;
//   height: 35px;
//   background: white;
//   color: gray;
//   padding-left: 5px;
//   font-size: 14px;
//   border: none;
//   margin-left: 10px;
// `;
// export const Option = styled.option`
//   font-size: small;
//   background-color: blue;
//   text-align: center;

//   color: blue;
// `;

export default Foo;
