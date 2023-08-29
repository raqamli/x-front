// add use client

import { createGlobalStyle } from 'styled-components';
import theme from './theme';

// Basic styling for the whole app

const GlobalStyle = createGlobalStyle`
    // Monserrat Google fonts
    @import url('https://fonts.googleapis.com/css2?family=Electrolize&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&display=swap');
  
    * {
        box-sizing: border-box;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
}

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    html{
        height:100%;
        font-family: 'Noto Sans', sans-serif;
    }
    body {
        height:100%;
        display:flex;
        flex-direction: column;
        background-color: ${theme.colors.light_background};
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    input, button {
        outline: none;
    }
    a,a:link, a:visited ,a:-webkit-any-link{
        text-decoration:none;
        color:inherit;

    }
    a:hover{
        text-decoration:underline;
    }
    #root{
        flex:1;
        display: flex;
    }
    #app{
        flex:1;
    }
`;

export default GlobalStyle;
