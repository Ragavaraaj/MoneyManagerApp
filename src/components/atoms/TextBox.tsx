import styled from "styled-components";
import { Colors } from "../../constants/Colors";

const TextBox = styled.input<{ gridArea?: string}>`
  border: 0;
  height: 50px;
  padding: 15px 25px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 500;
  color: ${Colors.red};
  box-shadow: 6px 5px 2px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(100px);
  margin: 0px 8px 5px 0px;
  line-height: 21px;
  grid-area: ${props => props.gridArea ?? ""};

  ::placeholder{
    color: ${Colors.red};
  }

  :focus{
    outline: none;
  }
`;

export default TextBox;
