import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
}
*, *::after, *::before {
    box-sizing: border-box;
}
body {
    // align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    justify-content: center;
    margin: 50px 16px 0px 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
}

h1 {
    font-weight: 200px;
    font-size: 36px;
    text-transform: uppercase;
    text-align: center;
}

h2 {
    text-transform: uppercase;
    text-align: center;
}

h3 {
    text-transform: uppercase;
    text-align: center;
}

p {
    text-align:center;
    margin: 10px 0px 10px 0px;

}

article {
    text-align:center;
    margin: 10px 0px 10px 0px;
}

li {
    text-align:center;
}

@media screen and (min-width: ${({theme}) => theme.tablet}) {
    body {
        
        margin-left: 100px;
        margin-right: 100px;
    }

`;
