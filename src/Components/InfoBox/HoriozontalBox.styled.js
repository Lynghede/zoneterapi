import styled from "styled-components";
import { theme } from "../../theme";

export const HoriozontalBoxContainer = styled.div`
  width: 280px;
  height: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.primaryLightDark};
  border-radius: 3px;

  transition: transform 0.3s ease-out;

  &:hover {
    transition: transform 0.3s ease-in-out;
    transform: translateY(-1rem);
    border: 2px solid ${theme.primaryLight};
    overflow: hidden;
  }
`;

export const HoriozontalImageContainer = styled.div`
  width: 280px;
  height: 120px;
  overflow: hidden;
  margin: 0;
  padding: 0px 2px 0px 0px;
`;

export const HoriozontalContent = styled.div`
  padding: 10px 20px 15px;
  height: 82px;
  color: ${({ theme }) => theme.primaryLightDark};
  flex-direction: column;

  h4 {
    margin: 0;
  }

  h5 {
    margin: 2px 0px 1px 0px;
  }
`;

export const HoriozontalFooter = styled.div`
 height: 82px;
  padding: 15px;
  border-top: 1px solid ${theme.primaryLightDark};
  //border-color: ${({ theme }) => theme.primaryLightDark};
`;
