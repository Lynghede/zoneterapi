import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function sizeToWidth(size) {
  if (size == 1) return "75%";
  if (size == 2) return "50%";
  if (size == 3) return "33.33%";
  if (size == 4) return "25%";
  return;
}

function align(align) {
  if (align == "center") return "center";
  if (align == "left") return "left";
  if (align == "right") return "right";
  return "";
}

function justify(justify) {
  if (justify == "left") return "left";
  if (justify == "right") return "right";
  if (justify == "evenly") return "space-evenly";
  if (justify == "center") return "center";
  if (justify == "end") return "end";
  if (justify == "start") return "start";
  if (justify == "flex-end") return "flex-end";
  return "center";
}

function textAlign(textAlign) {
  if (textAlign == "center") return "center";
  if (textAlign == "left") return "left";
  if (textAlign == "right") return "right";
  return "";
}

// const Wrapper = styled.div`
//   display: flex;
//   width: 100%;
//   margin: 0px;
//   //justify-content: center;
//   //flex-direction: column;
//   max-width: ${(p) => sizeToWidth(p.size)};
//   justify-content: ${(p) => justify(p.justify)};
//   align-items: ${(p) => align(p.align)};
// `;

export const ContainerContent = styled(Wrapper)`
  //width: 80%;
  width: 100%;
  margin: 100px;
`;

export const ContainerImage = styled(Wrapper)`
  justify-content: center;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //position: relative;
  border: ${(p) => p.theme.debugBorderWidth} solid red;
  //height: 100%;
  width: 100%;
  margin-top: 50px;
`;

export const Container = styled.div`
  display: flex;
  border: ${(p) => p.theme.debugBorderWidth} solid green;
  align-items: center;
  padding: 10px;
  width: 100%;
  flex-direction: column;
  //position: relative;

  :first-child {
    background: radial-gradient(70% 70% at 50% 100%, #1f1f1f 0, #111 100%);
  }
  :nth-child(even) {
    background: ${({ theme }) => theme.primaryGrey};
  }
`;

export const Block = styled.div`
  display: flex;
  border: ${(p) => p.theme.debugBorderWidth} solid yellow;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  max-width: ${(p) => sizeToWidth(p.size)};

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`;

export const HorisontalList = styled.div`
  display: flex;
  border: ${(p) => p.theme.debugBorderWidth} solid pink;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  border: ${(p) => p.theme.debugBorderWidth} solid blue;
  margin: 10px;
  flex-direction: column;
  justify-content: ${(p) => justify(p.justify)};
  max-width: ${(p) => sizeToWidth(p.size)};
  align-items: ${(p) => align(p.align)};
  text-align: ${(p) => textAlign(p.textAlign)};
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  min-width: 350px;
  border: ${(p) => p.theme.debugBorderWidth} dashed green;
  & > * {
    margin: 12px;
    flex-grow: 0;
    flex-basis: 50%;
    min-width: 0;
  }

  max-width: ${(p) => sizeToWidth(p.size)};

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  //height: auto;
  height: ${(p) => sizeToWidth(p.size)};
  //width: auto;
  width: ${(p) => sizeToWidth(p.size)};
  align-self: center;
  justify-content: center;
`;

export const SVGWrapper = styled.div`
  justify-content: ${(p) => justify(p.justify)};
  align-items: ${(p) => align(p.align)};
  max-width: ${(p) => sizeToWidth(p.size)};
  width: 100%;
`;

export const GridContainer = styled.div`
  display: flex;
  border: ${(p) => p.theme.debugBorderWidth} solid red;
  width: 100%;

  @media screen and (max-width: 1150px) {
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

export const GridItem = styled.div`
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 1150px) {
    :first-child {
      grid-row: 1;
      grid-column: 1;
    }
    :nth-child(2) {
      grid-row: 1;
      grid-column: 2;
    }

    :nth-child(3) {
      grid-row-start: 2;
      grid-column: 1 / span 2;
    }
  }
`;

export default Wrapper;
