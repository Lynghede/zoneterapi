import styled from 'styled-components'

const StyledInput = styled.input`
height: 40px;
width: 100%;
margin: 2px 0 10px 0;
border-radius: 3px;
padding: 0.25em 1em;
background: transparent;
font-size: medium;
color: ${({ theme }) => theme.primaryLight};

&:focus {
    box-shadow: 0 0 0 2pt ${({theme}) => theme.primaryFocus};
}

`

export default StyledInput;