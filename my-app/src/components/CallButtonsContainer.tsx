import { useState, useEffect } from "react";
import * as S from "../styles/CallButtonsContainer";
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
    <S.CallArea>
      <div>호출</div>
      <S.CallButtonsArea>
        {floors.map((num: number) => {
          return (
            <S.CallButton
              key={`callBtn-${num}`}
              onClick={() => {
                callBtnClickHandler(num);
              }}
              disabled={isDisabled}
            >
              {num}
            </S.CallButton>
          );
        })}
      </S.CallButtonsArea>
    </S.CallArea>
  );
}

export default CallButtonsContainer;
