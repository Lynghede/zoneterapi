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
    //align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    justify-content: center;
    margin: 0px 16px 0px 16px;
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

h4{
    text-transform: uppercase;
    text-align: center;
    font-style: italic;
}

p {
    text-align: left;
}
${"" /* 
p {
    text-align:center;
    margin: 10px 0px 10px 0px;

} */}

article {
    text-align: left;
    margin: 10px 0px 10px 0px;
}

li {
    text-align:center;
}


body {
    --grid-columns: 1fr 1fr;
    ---grid-columns: 1fr 1fr;
    ---grid-rows: 1fr;
    
    --cell-size: 50%;
}

svg {
    fill: currentColor;
}

b {
    color: black;
}

text {
    color: black;
}

t {
    color: black;
}

/* store skærme */
@media screen and (min-width: ${({ theme }) => theme.tablet}) {
    body {
        --cell-size: 33%;
        margin-left: 100px;
        margin-right: 100px;
    }

@media screen and (min-width: ${({ theme }) => theme.pc}) {
    body{
        --cell-size: auto;
        --grid-columns: 1fr 1fr 1fr 1fr;
        ---grid-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    li{
        text-align: left;
    }
    article{
        text-align: left;
    }
        

}

`;
