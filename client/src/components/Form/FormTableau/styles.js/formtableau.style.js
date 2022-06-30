import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.3em;
  justify-content: center;
`;

export const TableStyled = styled.table`
  table-layout: fixed;
  display: flex;
  flex-wrap: wrap;
  tr {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    vertical-align: middle;
    font-size: 1.3em;
  }
`;
