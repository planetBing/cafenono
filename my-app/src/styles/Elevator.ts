import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50px;
  height: 600px;
  border: 1px solid black;
  margin: 50px;
  display: flex;
  flex-direction: column-reverse;
`;

export const Floor = styled.div<{ opacity: number; moving: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ moving }) =>
    moving === "true" ? "1px solid red" : "1px solid black"};
  color: ${({ moving }) => (moving === "true" ? "red" : "black")};
  opacity: ${({ opacity }) => opacity};
`;
