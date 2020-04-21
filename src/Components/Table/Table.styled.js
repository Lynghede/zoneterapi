import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  //max-width: 300px;
  
  
  border-color: palevioletred;
  //border-collapse: collapse;
  //text-align: left;
  
  


  th {
    //background: ${({ theme }) => theme.primaryGreen};
    background: linear-gradient(
    180deg,
    rgba(129, 65, 92, 1) 0%,
    rgba(219, 112, 147, 1) 100%
  );
    border-color: transparent;
    border-collapse: separate;
  }

  tr,
  td {
    border: 1px solid;
    border-color: palevioletred;
    border-collapse: collapse;
    //width: 10px;
    //border-radius: 3px;
    border-width: 0;
    text-align: center;
  
  }

  

  tr {
    :nth-child(odd){
      background: transparent;
      

  }
  
    :nth-child(even){
        background: #db7970;

  }
  }

  @media screen and (min-width: ${({ theme }) => theme.pc}) {
      width: 50%;
  }
  
`;

export default Table;
