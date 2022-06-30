import styled, { css } from "styled-components";

const isHidden = (props) => {
  if (props.isHidden)
    return css`
      border: 0.2px transparent;
      @media (min-width: 768px) {
        display: none;
      }
    `;
};
export const SeparatorStyled = styled.div`
  width: 100%;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  margin: 2em 0;
  ${isHidden}
`;
