import styled from "styled-components";
import { floors } from "../model/floorsData";

function CallButtonsContainer() {
  return (
    <CallArea>
      <div>호출</div>
      <CallButtonsArea>
        {floors.map((num: number) => {
          return (
            <CallButton
              key={`callBtn-${num}`}
              onClick={() => {
                console.log(num);
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
`;

export default CallButtonsContainer;
