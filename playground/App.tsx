import Router from "./router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        border: none;
    }

    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
        font-family: 'Inter', sans-serif;
    }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
