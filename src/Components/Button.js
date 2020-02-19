import styled from "styled-components";

const Button = styled.button`
  background: linear-gradient(
    180deg,
    rgba(129, 65, 92, 1) 0%,
    rgba(219, 112, 147, 1) 100%
  );
  border-radius: 3px;
  border-width: 0;
  border-color: palevioletred;
  border-style: solid;
  color: white;
  margin: 2px;
  padding: 0.25em 1em;

  :hover {
    margin: 0;
    border-width: 2px;
    background: #282c34;
  }
`;

export default Button;
