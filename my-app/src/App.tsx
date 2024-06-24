import { useReducer } from "react";
import * as S from "./styles/App";
import CallButtonsContainer from "./components/CallButtonsContainer";
import Elevator from "./components/Elevator";
import { initialElevatorData } from "./model/initialElevatorData";
import { elevatorReducer } from "./reducers/elevatorReducer";

function App() {
  const [elevatorState, dispatch] = useReducer(
    elevatorReducer,
    initialElevatorData
  );

  return (
    <S.Wrapper>
      <CallButtonsContainer
        elevatorState={elevatorState}
        elevatorDispatch={dispatch}
      />
      <S.ElevatorWrapper>
        {elevatorState.map((elevatorObj) => {
          return (
            <Elevator
              key={`elevator-${elevatorObj.id}`}
              elevatorData={elevatorObj}
              elevatorDispatch={dispatch}
              elevatorNum={elevatorObj.id}
            />
          );
        })}
      </S.ElevatorWrapper>
    </S.Wrapper>
  );
}

export default App;
