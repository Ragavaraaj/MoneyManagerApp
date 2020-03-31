import styled from "styled-components";
import { Colors } from "../../constants/Colors";

interface Props {
  gridArea: string;
  bgColor: Colors;
  textColor: Colors;
}

const PlainButton = styled.button<Props>`
  justify-self: center;
  width: inherit;
  height: inherit;
  align-self: center;
  display: inline-block;
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  background-color: ${props => props.bgColor};
  background-position: center;
  transition: background 0.8s;
  color: inherit
  cursor: pointer;
  ${props => props.gridArea ? `grid-area: ${props.gridArea};` : ""};

  :hover,
  :focus {
    background: ${props => `${props.textColor === Colors.white ? Colors.rippleWhite : Colors.rippleRed}
      radial-gradient(circle, transparent 1%, ${props.textColor === Colors.white ? Colors.rippleWhite : Colors.rippleRed} 1%)
      center/15000%;
    `}
  }

  :focus {
    outline: 0;
    outline-offset: -4px;
    background-color: ${props => props.bgColor};
  }

  :active {
    background-color: ${props => props.bgColor};
    background-size: 100%;
    transition: background 0s;
  }
`;

const ShadowButton = styled(PlainButton)`
  border: 0;
  width: 95%;
  padding: 12px 15px;
  border-radius: 15px;
  font-size: 18px; 
  color: ${props => props.textColor};
  box-shadow: 6px 5px 2px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(100px);
  margin: 0px 8px 5px 0px;
`;

export default ShadowButton;
export { PlainButton };
