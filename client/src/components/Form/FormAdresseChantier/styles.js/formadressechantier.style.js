import styled from "styled-components";
import { fontSize } from "../../../../config";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${fontSize};
  label {
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  textarea {
    font-size: ${fontSize};
  }
`;
