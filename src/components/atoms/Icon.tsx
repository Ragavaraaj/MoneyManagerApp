import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IconSize } from '../../constants/Sizes'

interface Props {
  src: string;
  alt: string;
  size: IconSize;
}

const IconOutterDiv = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  align-items: center;
  background-color: #FE1E56;
  padding: 11px;
  border-radius: 50%;
`;
const IconImg = styled.img<{ size: IconSize }>`
  ${props => `
      width: ${props.size}px;
      height: ${props.size}px;
  `}
`;

const Icon: FunctionComponent<Props> = props => {
  return (
    <IconOutterDiv>
      <IconImg src={props.src} alt={props.alt} size={props.size} />
    </IconOutterDiv>
  );
};

export default Icon;
