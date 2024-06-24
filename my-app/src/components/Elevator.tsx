import { useState, useEffect } from "react";
import styled from "styled-components";
import { floors } from "../model/floorsData";
import { ElevatorType } from "../model/types";

interface ElevatorProps {
  elevatorData: ElevatorType;
  setElevatorData: (data: ElevatorType) => void;
}

function Elevator({ elevatorData, setElevatorData }: ElevatorProps) {
  const [currentFloor, setCurrentFloor] = useState<number>(1);
  const { destinationFloor, moving } = elevatorData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFloor((prevFloor) => {
        if (prevFloor < destinationFloor) {
          return prevFloor + 1;
        } else if (prevFloor > destinationFloor) {
          return prevFloor - 1;
        } else {
          setElevatorData({ ...elevatorData, moving: false });
          clearInterval(interval);
          return prevFloor;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [destinationFloor]);

  return (
    <Wrapper>
      {floors.map((floor) => {
        return (
          <Floor
            key={`elevatorFloor-${floor}`}
            opacity={currentFloor === floor ? 1 : 0}
            moving={moving.toString()}
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

const Floor = styled.div<{ opacity: number; moving: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ moving }) =>
    moving === "true" ? "1px solid red" : "1px solid black"};
  color: ${({ moving }) => (moving === "true" ? "red" : "black")};
  opacity: ${({ opacity }) => opacity};
`;

export default Elevator;
