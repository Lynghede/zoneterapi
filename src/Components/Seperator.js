import styled from "styled-components";

const Seperator = styled.svg`
  width: 100%;
  height: 2px;
  display: flex;
  justify-content: center;
  
  margin: 10px 0px 0px 0px;
  background: ${({ theme }) => theme.primaryLight};
  border-radius: 2px;
`;

export default Seperator;
