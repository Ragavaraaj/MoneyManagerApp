import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Colors } from "../constants/Colors";
import Icon from "./Icon";
import ArrowLabel from "./ArrowLabel";
import appIcon from "../icons/AppIcon.svg";
import Button from "./atoms/Button";

interface Props {}

const Menu = styled.div`
  background-color: ${Colors.red};
  width: 100%;
  height: 64px;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 64px auto 85px;
  grid-template-areas:
    "icon title button"
    "icon amount button";
  column-gap: 10px;
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

const TopMenu: FunctionComponent<Props> = props => {
  return (
    <Menu>
      <Button gridArea="icon">
        <Icon src={appIcon} alt="Bucks Bank" isCircle={false} />
      </Button>
      <Title gridArea="title">Amount Left</Title>
      <Amount gridArea="amount">$-50000000</Amount>
      <Button gridArea="button">
        <ArrowLabel imageOn="left">
          Analysis
        </ArrowLabel>
      </Button>
    </Menu>
  );
};

export default TopMenu;
