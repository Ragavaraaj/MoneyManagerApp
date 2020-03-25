import React from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import TopMenu from "./components/TopMenu";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  return (
    <div id="main">
      <GlobalStyle />
      <TopMenu />


    </div>
  );
}

export default App;
