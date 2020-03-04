import styled from "styled-components";
import device from "../Device";

const Border = styled.div`
  ${"" /* border-style: solid; */}
  border-radius: 3px;
  border-color: palevioletred;
  padding: 0px;
  margin: 0px;

  @media ${device.iphone678plus} {
    padding: 30px;
    margin: 20px;
    border-style: solid;
  }
  ${"" /* @media ${device.mobile} {
    margin: 0px;
    padding: 0px;
    border-style: none;
  } */}
  ${"" /* 
   @media ${device.iphone678X} {
    margin: 0px;
    padding: 0px;
  }

  @media ${device.samsungS9} {
    border-style: none;
    margin: 0px;
    padding: 0px;
  }
  @media ${device.iphone678plus}{
    padding: 30px;
    margin: 20px;
  } */}
`;

export default Border;
