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
    color: "palevioletred"
  })
};

export const Foo = styled(Select)`
  font-size: small;
  backgroundcolor: "black";
  color: palevioletred;
  min-width: 150px;
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
