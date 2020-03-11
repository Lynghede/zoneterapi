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
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    justify-content: center;
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

p {
    ${"" /* text-align: center; */}
    margin: 16px;

}
`;
