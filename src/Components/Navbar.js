import styled from "styled-components";

const NavBar = styled.nav`
  height: 48px;
  position: absolute;
  display: flex;
  justify-content: space-around;

  z-index: 9999;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.primaryDark};
  width: 100%;

  padding: auto;
  margin: auto;

  font-size: 17px;
  text-transform: uppercase;

  header {
    margin: auto;
    font-weight: bold;
  }

  button {
    margin-top: 5px;
  }

  svg {
    margin-top: -2px;
    position: absolute;
    left: 2rem;
    justify-content: space-around;
  }
`;

export default NavBar;
