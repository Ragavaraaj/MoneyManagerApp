import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Colors } from "../constants/Colors";
import AppIcon from "../icons/AppIcon.svg";
import ArrowLabel from "./atoms/ArrowLabel";
import { PlainButton } from "./atoms/Button";

interface Props {}

const Menu = styled.nav`
  background-color: ${Colors.red};
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 64px auto 85px;
  grid-template-areas:
    "icon title button"
    "icon amount button";
  column-gap: 10px;
  z-index: 5;
`;

const Title = styled.label<{ gridArea: string }>`
  line-height: 14px;
  grid-area: ${props => props.gridArea};
  justify-self: start;
  align-self: end;
  color: ${Colors.white};
`;

const Amount = styled.label<{ gridArea: string }>`
  font-size: 24px;
  line-height: 28px;
  grid-area: ${props => props.gridArea};
  justify-self: start;
  align-self: start;
  color: ${Colors.white};
`;

const Center = styled.div`
  width: 100%;
  height: inherit;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const TopMenu: FunctionComponent<Props> = props => {
  return (
    <Menu>
      <PlainButton gridArea="icon" bgColor={Colors.black} textColor={Colors.white}>
        <Center>
          <img src={AppIcon} alt="Bucks Bank" />
        </Center>
      </PlainButton>
      <Title gridArea="title">Amount Left</Title>
      <Amount gridArea="amount">$-50000000</Amount>
      <PlainButton gridArea="button" textColor={Colors.white} bgColor={Colors.red}>
        <ArrowLabel imageOn="left">Analysis</ArrowLabel>
      </PlainButton>
    </Menu>
  );
};

export default TopMenu;
