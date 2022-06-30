import styled, { css } from "styled-components";

const isSubmit = (props) => {
  if (props.typeAction === "Soumettre") {
    return css`
      color: white;
      border-radius: 10px;
      display: flex;
      justify-content: center;
    `;
  }
};
export const ButtonStyled = styled.button`
  background: ${(props) => (props.typeAction === "X" ? "red" : "lightgreen")};
  color: ${(props) => (props.typeAction === "X" ? "white" : "black")};
  font-size: 3em;
  outline: none;
  padding: 6px 18px;
  border: 1px solid ${(props) => (props.typeAction === "X" ? "orange" : "grey")};
  border-radius: 50%;
  ${isSubmit}
`;
