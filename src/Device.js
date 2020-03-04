import styled from "styled-components";

const size = {
  // width
  samsungS9: "360px",
  iphone678X: "375px",
  iphone678plus: "414px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
  mobile: "326px"
};

const device = {
  mobile: `(max-width: ${size.iphone678plus}`,
  samsungS9: `(min-width: ${size.samsungS9})`,
  iphone678X: `(min-width: ${size.iphone678X})`,
  iphone678plus: `(min-width: ${size.iphone678plus})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`
};

export default device;
