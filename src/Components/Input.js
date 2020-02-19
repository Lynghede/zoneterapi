import styled from "styled-components";

const Input = styled.input`
  display: flex;
  min-width: 20em;
  border-radius: 3px;
  border-width: 2px;
  border-color: transparent;
  padding: 3px 3px 3px 6px;
`;

export const InputDate = styled(Input)`
  min-width: auto;
  text-align: center;
  padding-left: ${p => (p.value === "" ? "1.3em" : "0.4em")};
`;

export default Input;
