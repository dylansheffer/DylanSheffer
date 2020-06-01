import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #111111;
    --red: #ff6188;
    --green: #a9dc76;
    --yellow: #ffd866;
    --orange: #fc9867;
    --purple: #ab9df2;
    --blue: #78dce8;
    --white: #fcfcfa;
    --grey: #BDBBBD;
    --main: #2d2a2e;
    --surface-light: var(--main);
    --surface-medium: #221F22;
    --surface-dark: #19181A;
    --text: var(--white);
    --shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    --border: 0.25rem solid var(--black);
    --sans-serif: 'Open Sans', sans-serif;
    --monospace: 'Hack', monospace;
    --link-underline: inset 0 -0.07em 0 var(--yellow);
    --link-underline-focus: inset 0 -10em 0 var(--yellow);
    --link-transition: box-shadow 270ms cubic-bezier(0.77, 0, 0.175, 1),color 270ms cubic-bezier(0.77, 0, 0.175, 1);
  }
  html {
    font-family: var(--sans-serif);
    box-sizing: border-box;
    font-size: 10px;
  }
  body {
    min-height: 100vh;
    font-size: 2rem;
    background-color: var(--surface-light);
    color: var(--text);
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ::selection {
    color: var(--black);
    /* Need to set some opacity because Chrome will apply it automatically */
    background: rgba(255, 216, 102, 0.99);
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--monospace);
    font-weight: normal;
    line-height: 1.5;
  }
  a {
    color: var(--yellow);
    transition: var(--link-transition);
    box-shadow: var(--link-underline);
    text-decoration: none;
    &:hover, :focus {
      color: var(--black);
      box-shadow: var(--link-underline-focus);
    }
    code {
      text-decoration: underline;
      box-shadow: none;
      color: var(--yellow);
    }
  }
  pre[data-language] {
    border-radius: 0;
    padding: 3rem;
    width: 100%;
    line-height: 1.5;
    border: 0.25rem solid var(--black);
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
  }
  pre {
    white-space: break-spaces;
  }
  code, kbd, samp {
    font-family: var(--monospace);
    font-weight: 300;
  }

  video {
    max-width: 100%;
  }
  img {
    max-width: 100%;
  }

  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--yellow) var(--black);
  }
  body::-webkit-scrollbar-track {
    background: var(--black);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--yellow) ;
    border-radius: 6px;
    border: 3px solid var(--black);
  }

`;
export default GlobalStyles;
