import { useState, useEffect } from "react";
import styled from "styled-components";
import { floors } from "../model/floorsData";
import { ElevatorType } from "../model/types";
import { ActionType } from "../reducers/elevatorReducer";
import {
  filterNotMovingElevator,
  findLeastFloorDiffElevator,
} from "../utils/utils";

interface CallButtonsContainerProps {
  elevatorDispatch: React.Dispatch<ActionType>;
  elevatorState: ElevatorType[];
}

function CallButtonsContainer({
  elevatorDispatch,
  elevatorState,
}: CallButtonsContainerProps) {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    const avaliableElevators = filterNotMovingElevator(elevatorState);
    setIsDisabled(avaliableElevators.length === 0);
  }, [elevatorState]);

  const callBtnClickHandler = (num: number) => {
    const avaliableElevators = filterNotMovingElevator(elevatorState);
    const elevatorIdToMove = findLeastFloorDiffElevator(
      avaliableElevators,
      num
    ).id;
    elevatorDispatch({
      type: "setDestination",
      id: elevatorIdToMove,
      destinationFloor: num,
    });
  };

  return (
    <CallArea>
      <div>호출</div>
      <CallButtonsArea>
        {floors.map((num: number) => {
          return (
            <CallButton
              key={`callBtn-${num}`}
              onClick={() => {
                callBtnClickHandler(num);
              }}
              disabled={isDisabled}
            >
              {num}
            </CallButton>
          );
        })}
      </CallButtonsArea>
    </CallArea>
  );
}

const CallArea = styled.div`
  display: flex;
  margin: 50px;
  gap: 15px;
`;
const CallButtonsArea = styled.div`
  display: flex;
  gap: 8px;
`;

const CallButton = styled.div<{ disabled: boolean }>`
  border: 1px solid gray;
  width: 20px;
  border-radius: 50%;
  background-color: ${({ disabled }) => (disabled ? "grey" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default CallButtonsContainer;
