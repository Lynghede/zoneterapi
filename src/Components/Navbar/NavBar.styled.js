import styled from "styled-components";

const StyledNavBar = styled.nav`
  height: 48px;
  position: fixed;
  display: flex;
  justify-content: space-around;

  z-index: 9999;
  top: 0;
  left: 0;
  background: ${({ isTranparent, theme }) =>
    isTranparent ? "transparent" : theme.primaryDark};
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
    left: 10px;
    justify-content: space-around;
  }

  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    svg {
      left: 95px;
    }
  }
`;

export default StyledNavBar;
