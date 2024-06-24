import styled from "styled-components";

export const CallArea = styled.div`
  display: flex;
  margin: 50px;
  gap: 15px;
`;
export const CallButtonsArea = styled.div`
  display: flex;
  gap: 8px;
`;

export const CallButton = styled.div<{ disabled: boolean }>`
  border: 1px solid gray;
  width: 20px;
  border-radius: 50%;
  background-color: ${({ disabled }) => (disabled ? "grey" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
