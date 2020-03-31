import React from "react";
import styled from "styled-components";
import FormMenu from "../atoms/FormMenu";
import calender from "../../icons/CalenderIcon.svg";
import catogary from "../../icons/CatogaryIcon.svg";
import contact from "../../icons/ContactIcon.svg";
import image from "../../icons/ImageIcon.svg";
import next from "../../icons/NextIcon.svg";
import IconButton from "./IconButton";
import { IconSize } from "../../constants/Sizes";
import TextArea from "../atoms/TextArea";
import TextBox from "../atoms/TextBox";

const Next = styled.img`
  width: 32px;
  height: 27px;
`;

const Back = styled.img`
  transform: rotate(180deg);
  width: 32px;
  height: 27px;
`;

const OutterDiv = styled.div`
  position: absolute;
  bottom: 0;
  border-radius: 50px 50px 0px 0px;
  width: 100%;
  height: 450px;
  padding: 18px 28px;
  z-index: 20;
  background-color: rgb(50, 50, 50);
`;

const MenuTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: white;
`;

const InputDiv = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template: auto / 1fr 1fr;
  gap: 5px;
  grid-template-areas:
    "TB1 TB2"
    "TEXT TEXT"
    "TEXTAREA TEXTAREA"
    "TB3 TB4";
`;

interface Props {}

interface State {}

class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <OutterDiv>
        <FormMenu textAt="mid">
          <Back src={next} alt="back" />
          <MenuTitle>Menu Title</MenuTitle>
          <Next src={next} alt="next" />
        </FormMenu>
        <InputDiv>
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
          >
            Add Image
          </IconButton>
        </InputDiv>
      </OutterDiv>
    );
  }
}

export default Form;
