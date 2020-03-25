import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Arrow from "../icons/Arrow.svg"

const Image = styled.img<{ flip: boolean }>`
  ${props => (props.flip ? "transform: rotate(180deg)" : "")};
  align-self: center;
  `;

const Label = styled.label`
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin: auto 5px;
`;


const Grid = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr;
`;

interface Props {
  imageOn: "left" | "right";
  children: string;
}

const ArrowButton: FunctionComponent<Props> = props => {
  let imageLabel: JSX.Element;
  switch (props.imageOn) {
    case "left":
      imageLabel = (
        <Grid>
          <Label>{props.children}</Label>
          <Image src={Arrow} alt={"go" + props.children} flip={false} />
        </Grid>
      );
      break;
    case "right":
      imageLabel = (
          <Grid>
            <Image src="" alt={"go" + props.children} flip={true} />
            <Label>{props.children}</Label>
          </Grid>
      );
      break;
  }
  return imageLabel;
};

export default ArrowButton;
