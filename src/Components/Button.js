import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.primaryColor};
  border-radius: 3px;
  border-width: 0;
  border-color: palevioletred;
  border-style: solid;
  color: white;
  margin: 2px;
  min-height: 2em;
  cursor: pointer;
  font-size: 1.5em;

  text-transform: uppercase;
  //width: 200px;
  height: 2em;

  :hover {
    border-width: 2px;
    background: transparent;
    font-weight: bold;
  }
`;

export const TransparentButton = styled(Button)`
  background: transparent;
  border-width: 0.1em;

  :hover {
    border-width: 0;
    background: ${({ theme }) => theme.primaryColor};
  }
`;

export const LargerButton = styled(Button)`
  width: 100%;
  height: 30px;

  @media screen and (min-width: ${({ theme }) => theme.pc}) {
    width: 50%;
  }
`;

export const BookingButton = styled(Button)`
  width: 70px;
  height: 70px;
  font-size: 2em;
  padding: 0;
  margin: 5px;

  :hover {
    font-weight: bold;
  }

  &[disabled] {
    opacity: 20%;
  }

  @media screen and (min-width: ${({ theme }) => theme.pc}) {
    width: 200px;
  }
`;

export default Button;
