import styled from "styled-components";

const Label = styled.label`
  display: flex;
  margin-bottom: 2px;
  margin-top: 2px;
`;

export const FlashyLabel = styled.div`
  background: linear-gradient(
    180deg,
    rgba(129, 65, 92, 1) 0%,
    rgba(219, 112, 147, 1) 100%
  );
  border-style: solid;
  border-radius: 3px;
  border-width: 0px;
  border-color: palevioletred;
  padding: 7px;
  height: 2em;
  min-width: 200px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

export default Label;
