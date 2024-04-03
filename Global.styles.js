import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #C4F440;
    --primary-25: #E0f99b;
    --gray-50:#D9D9D9;
    --secondary: #141416;
    --body-color: white;
    --white: #fff;
    --light-gray: #D9D9D9;
    --black: #141416;
    --body-text: #141416;
    --body-text-25: #777777;
    --hint-green: #32BEA6;
    --lite-green: #C4F440;
    --gray--bg: #D9D9D9;
    --base-font-sans-serif: "Okine", "Arial", "Helvetica Neue", "Helvetica",
      sans-serif;
    /* Body */
    --base-text-color: var(--body-text);
    --base-background-color: var(--body-color);
    --font-size-base: 20px;
    --line-height-base: 24px;
    --base-font-family: var(--base-font-sans-serif);
    --base-min-width: 350px;

    /*  Links */
  }
  * {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
  }
  *:before,
  *:after,
  * {
    box-sizing: border-box;
  }
 /* @font-face {
    font-family: 'Okine';
    src: url('/fonts/MADEOkineSansPERSONALUSE-Light.woff2') format('woff2'),
        url('/fonts/MADEOkineSansPERSONALUSE-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Okine';
    src: url('/fonts/MADEOkineSansPERSONALUSE-Bold.woff2') format('woff2'),
        url('/fonts/MADEOkineSansPERSONALUSE-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Okine';
    src: url('/fonts/MADEOkineSansPERSONALUSE-Black.woff2') format('woff2'),
        url('/fonts/MADEOkineSansPERSONALUSE-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Okine';
    src: url('/fonts/MADEOkineSansPERSONALUSE-Medium.woff2') format('woff2'),
        url('/fonts/MADEOkineSansPERSONALUSE-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Okine';
    src: url('/fonts/MADEOkineSansPERSONALUSE-Thin.woff2') format('woff2'),
        url('/fonts/MADEOkineSansPERSONALUSE-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Okine';
    src: url('/fonts/MADEOkineSansPERSONALUSE-Regular.woff2') format('woff2'),
        url('/fonts/MADEOkineSansPERSONALUSE-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
} */

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--base-text-color);
    /* font: var(--font-size-base) / var(--line-height-base)
      var(--base-font-family); */
    font-size:20px;
    line-height:24px ;
    font-weight: 300;
    position: relative;
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    top: 0px !important;
    background: var(--white);
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 98;
  }

  #wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;

    @media (min-width: 992px) {
    }
  }

 
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  figure{
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="file"],
  input[type="submit"] {
    cursor: pointer;
    font-family: var( --base-font-sans-serif);
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  button {
    transition: opacity var(--animation-speed) ease-in-out,
      background var(--animation-speed) ease-in-out,
      visibility var(--animation-speed) ease-in-out,
      border var(--animation-speed) ease-in-out,
      color var(--animation-speed) ease-in-out;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
    font-family: var(--font-size-base);
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin: 0 0 15px;
    color: var(--body-text);
    font-weight: 400;
  }
  h1,
  .h1 {
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
   
    @media screen and (min-width: 768px){
    font-size: 40px;
    line-height: 44px;
    }
    @media screen and (min-width: 992px){
    font-size: 50px;
    line-height: 54px;
    }
    @media screen and (min-width: 1200px){
       font-size: 60px;
    line-height: 64px;
    }
  }
  h2,
  .h2 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    @media screen and (min-width: 768px){
    font-size: 35px;
    line-height: 40px;
    }
    @media screen and (min-width: 1200px){
        font-size: 45px;
        line-height: 49px;
    }

  }
  h3,
  .h3 {
    font-size: 26px;
    line-height: 30px;
  }
  h4,
  .h4 {
    font-size: 14px;
    line-height: 23px;
    @media (min-width: 576px){
      font-size: 16px;
    }
    @media (min-width: 786px){
      font-size: 18px;
    }
  }

  p {
    margin: 0 0 15px;

    &:last-child {
      margin: 0;
    }
  }
  .faqSection{
    width: 100px;
    
  }

  

  /* Track */
 
  /* Handle on hover */
  /* Remove Arrows/Spinners from input type number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    appearance: textfield;
  }
 
`;