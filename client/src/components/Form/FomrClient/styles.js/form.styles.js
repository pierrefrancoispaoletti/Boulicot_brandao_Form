import styled from "styled-components";
import { fontSize, isInError } from "../../../../config";

const InputClientStyledContainer = styled.div`
  position: relative;
  display: flex;
  margin: 12px;
  justify-content: space-between;
  label {
    font-size: ${fontSize};
  }
  input {
    width: 45%;
    font-size: ${fontSize};
    ${isInError}
  }
  .error-message {
    position: absolute;
    top: 27px;
    right: 0;
    font-size: 0.7em;
    color: red;
  }
`;

export { InputClientStyledContainer };
