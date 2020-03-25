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
  padding: 2rem 0;

  @media (min-width: ${({theme}) => theme.mobile}){
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
  }

  @media (min-width: ${({theme}) => theme.tablet}){
    display: flex;
    flex-direction: row;
  }

  a {
    font-size: 0.5rem;
    text-transform: uppercase;
    padding: 0.3em 0 2em 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;


    @media (min-width: ${({theme}) => theme.mobile}){
      font-size: 1rem;
      text-align: center;
      // flex-direction: row;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

 
`;


export const StyledItem1 = styled.div`
grid-column: 1 / span 2;
margin-bottom: 5px;

`


export default StyledFooter;
