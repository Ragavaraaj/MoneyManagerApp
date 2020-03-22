import React from "react";
import { createGlobalStyle } from "styled-components";
import { Direction } from "./constants/Enums";
import ArrowButton from "./components/ArrowButton";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  return (
    <div id="main">
      <GlobalStyle />
      <ArrowButton imageOn={Direction.Left}>Analysis</ArrowButton>
      <br />
      <br />
      <ArrowButton imageOn={Direction.Right}>Back</ArrowButton>
    </div>
  );
}

export default App;
