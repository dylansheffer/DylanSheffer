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
  }
  html {
    font-family: var(--sans-serif);
    box-sizing: border-box;
    font-size: 10px;
  }
  @media (max-width: 500px) {
    html {
      font-size: 9px;
    }
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
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--monospace);
    font-weight: normal;
    line-height: 1.5;
  }
  a {
    color: var(--yellow);
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
