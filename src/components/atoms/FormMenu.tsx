import styled from "styled-components";

const FormMenu = styled.div<{ textAt: "left" | "mid" | "right" }>`
  width: 100%;
  height: 42px;
  display: grid;
  ${props => {
    switch (props.textAt) {
      case "mid":
        return `
            grid-template: auto / 38px auto 38px;
            justify-items: center;
            align-items: center;
        `;
      case "left":
        return `
            grid-template: auto / auto 38px;
            justify-items: center;
            align-items: start;
        `;
      case "right":
        return `
            grid-template: auto / auto 38px;
            justify-items: center;
            align-items: end;
        `;
    }
  }}
`;

export default FormMenu
