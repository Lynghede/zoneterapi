import styled from "styled-components";

export const Header = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Header2 = styled.h2`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 2.5em;
`;
export const Header3 = styled(Header)`
  font-size: 1.2em;
  color: ${({ theme }) => theme.primaryLight};
  max-width: 37rem;
  text-align: center;
`;
export const Header4 = styled(Header)`
  font-size: 1.2em;
  color: ${({ theme }) => theme.primaryLightDark};
  max-width: 37rem;
  text-align: center;
`;

export const Header5 = styled(Header)`
  font-size: 1.2em;
`;

export const PHeader = styled(Header)`
  justify-content: space-evenly;
  max-width: 37rem;
  margin: 0;
`;

export const PHeader2 = styled.h2`
  text-align: left;
  font-size: 2rem;
`;

export const PHeader3 = styled.h3`
  font-size: 1.2em;
  text-align: left;
  margin: 0;
`;

export default PHeader;
