import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 33.333%;
  min-height: 626px;
  min-width: 324px;
  margin: 20px;
  display: flex;

  > * {
    display: flex;
  }

  @media screen and (min-width: 835px) {
    transition: transform 0.3s ease-out;

    &:hover {
      transform: translateY(-1rem);
    }
  }
`;

export const Box = styled.div`
  padding: 0 1.5rem 0 1.5rem;
  flex-direction: column;
  border-radius: 3px;
  display: flex;

  > * {
    display: flex;
  }

  background: ${(props) => props.color || props.theme.primaryBox};
`;
export const SVGWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;

  > * {
    display: flex;
  }

  svg {
    width: 40px;
    height: 80px;
  }
`;

export const BoxAnimation = styled.div`
  flex-direction: column;
  flex: 1 auto;
  overflow: hidden;
  display: flex;

  > * {
    display: flex;
  }
  p,
  h3,
  div {
    display: flex;
    flex: 1 1 auto;
  }
  button {
  }

  @media screen and (min-width: ${({ theme }) => theme.tabletTilt}) {
    & > * {
      transition: transform 0.3s ease-in-out;
      transform: translateY(calc(100% - 10rem));
    }

    &:hover > * {
      transform: translateY(0);
    }

    &:hover p,
    &:hover h3,
    &:hover button {
      transition: opacity 0.8s ease-in-out;
      opacity: 100%;
    }
    p,
    h3 {
      opacity: 0;
    }
    button {
      opacity: 0;
    }
  }
`;
