
import styled from "styled-components";
import device from "../Device";

const MakeReservation = styled.div`
  display: flex;

  justify-content: center;
  // height: 100%;
  width: 320px;
  background-color: transparent;
  border-style: none;
  border-radius: 3px;
  border-color: palevioletred;
  padding: 30px;
  padding-top: 10px;
  margin: 20px auto;

  @media ${device.iphone678plus} {
    border-style: solid;
  }
`;

export const WrapperMakeReservation = styled.div`
  display: grid;

  @media ${device.tablet} {
    grid-column-end: span 2;
  }
  @media ${device.laptop} {
    grid-column-end: span 2;
  }
  @media ${device.laptopL} {
    grid-column-end: span 2;
  }
  @media ${device.desktop} {
    grid-column-end: span 2;
  }
`;

export default MakeReservation;
