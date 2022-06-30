import React from "react";
import { ButtonStyled } from "./styles.js/button.style";

const Button = ({ typeAction, ...otherprops }) => {
  return (
    <ButtonStyled {...otherprops} typeAction={typeAction}>
      {typeAction}
    </ButtonStyled>
  );
};

export default Button;
