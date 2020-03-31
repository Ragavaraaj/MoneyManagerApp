import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Dummy from "./icons/DummyIcon.svg";
import food from "./icons/BigFoodIcon.svg";
import calender from "./icons/CalenderIcon.svg";
import catogary from "./icons/CatogaryIcon.svg";
import contact from "./icons/ContactIcon.svg";
import image from "./icons/ImageIcon.svg";
import settings from "./icons/SettingsIcon.svg";
import "./App.css";
import next from "./icons/NextIcon.svg";
import TopMenu from "./components/TopMenu";
import Icon from "./components/atoms/Icon";
import TextBox from "./components/atoms/TextBox";
import TextArea from "./components/atoms/TextArea";
import BoldButton from "./components/molecules/BoldButton";
import IconButton from "./components/molecules/IconButton";
import { IconSize } from "./constants/Sizes";
import TransactionCard from "./components/molecules/TransactionCard";
import Form from "./components/molecules/Form";

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

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  z-index: 0;
`;

const Next = styled.img`
  width: 32px;
  height: 27px;
`;

const Back = styled.img`
  transform: rotate(180deg);
  width: 32px;
  height: 27px;
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <TopMenu />
      <Content>
        <br></br>
        <TransactionCard
          date="03-03-2020"
          amount={-3000000}
          description="for Dinner at..."
        />
        <br></br>
        <TextBox value="asdasd" />
        <br></br>
        <BoldButton>Select Date</BoldButton>
        <br></br>
        <IconButton
          imgSize={IconSize.small}
          imgSrc={Dummy}
          alt="Dummy"
          gridArea=""
        >
          Button
        </IconButton>
        <br></br>
        <TextArea value="asd" />
        <br></br>
        Icon from rect component
        <br></br>
        <Icon src={food} alt="food" size={IconSize.small}></Icon>
        <br></br>
        <div className="bigbutton">
          <IconButton
            imgSize={IconSize.vBig}
            imgSrc={settings}
            alt="Dummy"
            invert
            isBig
            gridArea=""
          >
            Settings
          </IconButton>
        </div>
        <br></br>
        {/* <Form /> */}
      </Content>
      <div className="Form">
        <div className="Menu">
          <Back src={next} alt="back" />
          <label className="Title">Menu Title</label>
          <Next src={next} alt="next" />
        </div>
        <div className="Inputs">
          <IconButton
            imgSize={IconSize.small}
            imgSrc={calender}
            alt="Dummy"
            gridArea="TB1"
          >
            Select Date
          </IconButton>
          <IconButton
            imgSize={IconSize.small}
            imgSrc={catogary}
            alt="Dummy"
            gridArea="TB2"
          >
            Add Catogary
          </IconButton>
          <TextBox gridArea="TEXT" placeholder="Price" />
          <TextArea gridArea="TEXTAREA" placeholder="Description" />
          <IconButton
            imgSize={IconSize.small}
            imgSrc={contact}
            alt="Dummy"
            gridArea="TB3"
          >
            Add Contact
          </IconButton>
          <IconButton
            imgSize={IconSize.small}
            imgSrc={image}
            alt="Dummy"
            gridArea="TB4"
            zIndex="5"
          >
            Add Image
          </IconButton>
        </div>
        <div className="FormOverlay">
          <div>
            <div className="FromCamera"></div>
            <div className="FromGalary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
