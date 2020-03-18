import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  position: absolute;
  left: 0;
  background: transparent;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  bottom: auto;
 

  padding: 5rem 0;

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.3em 0 2em 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

 
`;
export default StyledFooter;
