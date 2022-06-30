import styled from "styled-components";
import { fontSize } from "../../../../config";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSize};
  .form-radio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 7px 12px;
    input {
      border: 0px;
      width: 100%;
      height: 2em;
    }
  }
`;
