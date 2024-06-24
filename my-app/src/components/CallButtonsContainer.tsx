import styled from "styled-components";
import { floors } from "../model/floorsData";
import { ElevatorType } from "../model/types";

interface CallButtonsContainerProps {
  setFirstElevator: (data: ElevatorType) => void;
}

function CallButtonsContainer({ setFirstElevator }: CallButtonsContainerProps) {
  return (
    <CallArea>
      <div>호출</div>
      <CallButtonsArea>
        {floors.map((num: number) => {
          return (
            <CallButton
              key={`callBtn-${num}`}
              onClick={() => {
                setFirstElevator({ destinationFloor: num, moving: true });
              }}
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

const CallButton = styled.div`
  border: 1px solid gray;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

export default CallButtonsContainer;
