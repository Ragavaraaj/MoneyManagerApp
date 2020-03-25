import styled from "styled-components";
import { Colors } from "../../constants/Colors";

interface Props {
  gridArea: string;
  bgColor?: Colors;
}

const Button = styled.button<Props>`
  justify-self: center;
  width: inherit;
  height: inherit;
  align-self: center;
  display: inline-block;
  border: none;
  padding: 0;npm install
  margin: 0;
  text-decoration: none;
  background-color: ${props => props.bgColor ?? "inherit"};
  background-position: center;
  transition: background 0.8s;
  color: inherit;
  cursor: pointer;
  grid-area: ${props => props.gridArea};

  &:hover,
  &:focus {
    background: blue radial-gradient(circle, transparent 1%, blue 1%)
      center/15000%;
  }

  &:focus {
    outline: 0;
    outline-offset: -4px;
    background-color: ${props => props.bgColor ?? "inherit"};
  }

  &:active {
    background-color: ${props => props.bgColor ?? "inherit"};
    background-size: 100%;
    transition: background 0s;
  }
`;

export default Button;
