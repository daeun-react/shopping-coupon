import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
  @font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
}
    box-sizing: border-box;

  }
  body {
    font-family: 'GowunDodum-Regular';
    padding: 0;
    margin: 0;
  }
  button {
    cursor: pointer;
    border: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
