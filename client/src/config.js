import { css } from "styled-components";
// config globale css et fonctions css
let fontSize = "1.3rem";

const isInError = (props) => {
  if (props.error)
    return css`
      border: 2px solid red;
    `;
};

export { fontSize, isInError };
