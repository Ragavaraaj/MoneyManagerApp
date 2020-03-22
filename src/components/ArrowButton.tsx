import React, { FunctionComponent } from "react";
import { Direction } from "../constants/Enums";
import Arrow from "../icons/Arrow.svg";
import styled from "styled-components";

const Image = styled.img<{ flip: boolean }>`
  ${props => (props.flip ? "transform: rotate(180deg)" : "")};
`;

const Label = styled.label`
  color: #ffffff;
  margin: 3px 5px 7px 5px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

interface Props {
  imageOn: Direction;
  children: string;
}

const ArrowButton: FunctionComponent<Props> = props => {
  let imageLabel: JSX.Element;
  switch (props.imageOn) {
    case Direction.Left:
      imageLabel = (
        <div className="button">
          <Label>{props.children}</Label>
          <Image src={Arrow} alt={"go" + props.children} flip={false} />
        </div>
      );
      break;
    case Direction.Right:
      imageLabel = (
        <Button>
          <Image src={Arrow} alt={"go" + props.children} flip={true} />
          <Label>{props.children}</Label>
        </Button>
      );
      break;
    case Direction.Top:
      imageLabel = (
        <div className="button">
          <Image src={Arrow} alt={props.children} flip={false} />
          <Label>{props.children}</Label>
        </div>
      );
      break;
    default:
      imageLabel = <div></div>;
  }
  return imageLabel;
};

export default ArrowButton;
