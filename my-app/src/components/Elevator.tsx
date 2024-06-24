import { useState } from "react";
import styled from "styled-components";
import { floors } from "../model/floorsData";

function Elevator() {
  const [currentFloor, setCurrentFloor] = useState<number>(1);
  return (
    <Wrapper>
      {floors.map((floor) => {
        return (
          <Floor
            key={`elevatorFloor-${floor}`}
            opacity={currentFloor === floor ? 1 : 0}
          >
            {floor}
          </Floor>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50px;
  height: 600px;
  border: 1px solid black;
  margin: 50px;
  display: flex;
  flex-direction: column-reverse;
`;

const Floor = styled.div<{ opacity: number }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  opacity: ${({ opacity }) => opacity};
`;

export default Elevator;
