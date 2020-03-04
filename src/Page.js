import styled from "styled-components";
import device from "./Device";

const Page = styled.div`
  text-align: center;
  background-color: #282c34;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  color: white;

  @media ${device.samsungS9} {
    max-width: 100%;
  }

  @media ${device.tablet} {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptop} {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptopL} {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.desktop} {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
  }
`;

export default Page;
