import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { IconSize } from "../../constants/Sizes";
import { Colors } from "../../constants/Colors";

const Label = styled.label`
  line-height: 21px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
`;

const Center = styled.div<{ isBig: boolean }>`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 18px;
  gap: ${props => (props.isBig ? "12" : "5")}px;
  justify-items: center;
`;

const IconImg = styled.img<{ size: IconSize }>`
  ${props => `
      width: ${props.size}px;
      height: ${props.size}px;
  `}
`;

const ZindexDiv = styled.div<{ z: string }>`
  z-index: ${props => props.z};
`;

interface Props {
  children: string;
  imgSrc: string;
  imgSize: IconSize;
  alt: string;
  gridArea: string;
  invert?: boolean;
  isBig?: boolean;
  zIndex?: string;
}

const IconButton: React.FunctionComponent<Props> = props => {
  let invert = props.invert ?? false;
  let isBig = props.isBig ?? false;
  let zIndex = props.zIndex ?? ""
  let buttonElement: any;
  let iconAndText = (
    <Center isBig={isBig}>
      <IconImg src={props.imgSrc} alt={props.alt} size={props.imgSize} />
      <Label>{props.children}</Label>
    </Center>
  );
  if (invert) {
    buttonElement = (
      <Button
        bgColor={Colors.red}
        textColor={Colors.white}
        gridArea={props.gridArea}
      >
        {iconAndText}
      </Button>
    );
  } else {
    buttonElement = (
      <Button
        textColor={Colors.red}
        bgColor={Colors.white}
        gridArea={props.gridArea}
      >
        {iconAndText}
      </Button>
    );
  }
  if (zIndex) {
    return <ZindexDiv z={zIndex}>{buttonElement}</ZindexDiv>;
  } else {
    return buttonElement;
  }
};

export default IconButton;
