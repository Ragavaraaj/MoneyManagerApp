import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Colors } from "../constants/Colors";

interface Props {
  src: string;
  alt: string;
  isCircle?: boolean;
}

const AutoPadding = styled.div<{ toCircle: boolean }>`
  width: inherit;
  height: inherit;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${Colors.black};
  ${props => (props.toCircle ? "border-radius: 100%" : "")};
`;

const Icon: FunctionComponent<Props> = props => {
  return (
    <AutoPadding toCircle={props.isCircle ?? false}>
      <img src={props.src} alt={props.alt} />
    </AutoPadding>
  );
};

export default Icon;
