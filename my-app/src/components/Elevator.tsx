import { useState, useEffect } from "react";
import * as S from "../styles/Elevator";
import { floors } from "../model/floorsData";
import { ElevatorType } from "../model/types";
import { ActionType } from "../reducers/elevatorReducer";

interface ElevatorProps {
  elevatorData: ElevatorType;
  elevatorDispatch: React.Dispatch<ActionType>;
  elevatorNum: number;
}

function Elevator({
  elevatorData,
  elevatorDispatch,
  elevatorNum,
}: ElevatorProps) {
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
          elevatorDispatch({ type: "stopMoving", id: elevatorNum });
          clearInterval(interval);
          return prevFloor;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [destinationFloor]);

  return (
    <S.Wrapper>
      {floors.map((floor) => {
        return (
          <S.Floor
            key={`elevatorFloor-${floor}`}
            opacity={currentFloor === floor ? 1 : 0}
            moving={moving.toString()}
          >
            {floor}
          </S.Floor>
        );
      })}
    </S.Wrapper>
  );
}

export default Elevator;
