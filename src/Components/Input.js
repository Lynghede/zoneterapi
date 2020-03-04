import styled from "styled-components";

const Input = styled.input`
  display: flex;
  min-width: 19.2em;

  border-radius: 4px;
  border-width: 1px;
  border-color: transparent;
  border-style: solid;
  padding: 2px 8px;
  box-shadow: "0 0 0 1px #2684FF";
  height: 22px;
`;

export const InputDate = styled(Input)`
  ${"" /* min-width: auto; */}
  ${"" /* text-align: center; */}
  ${"" /* padding-left: ${p => (p.value === "" ? "1.3em" : "0.4em")}; */}
  margin: auto;
`;

export default Input;
