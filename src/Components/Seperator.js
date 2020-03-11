import styled from "styled-components";

const Seperator = styled.svg`
  width: 90%;
  height: 2px;
  display: flex;
  justify-content: center;

  margin: auto;
  background: ${({ theme }) => theme.primaryLight};
  border-radius: 2px;
`;

export default Seperator;
