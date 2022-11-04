import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

@import url("../fonts/stylesheet.css");
    
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: Bw Modelica Cyrillic DEMO;
    }

    body{
        background-color:#0F0F0F;
        color: #FFFFFF;
    }
`

export default GlobalStyles;