import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { Colors } from "../../constants/Colors";


const Label = styled.label`
  line-height: 21px;
  font-weight: 500;
  font-size: 18px;
`;

interface Props {
  children: string;
}

const BoldButton: React.FunctionComponent<Props> = props => {
  return (
    <Button textColor={Colors.red} bgColor={Colors.white} gridArea="">
      <Label>{props.children}</Label>
    </Button>
  );
};

export default BoldButton;
