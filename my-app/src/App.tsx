import "./App.css";
import { useReducer } from "react";
import styled from "styled-components";
import CallButtonsContainer from "./components/CallButtonsContainer";
import Elevator from "./components/Elevator";
import { ElevatorType } from "./model/types";
import { elevatorReducer } from "./reducers/elevatorReducer";

const initialElevatorData: ElevatorType[] = [
  {
    id: 1,
    destinationFloor: 1,
    moving: false,
  },
  {
    id: 2,
    destinationFloor: 1,
    moving: false,
  },
  {
    id: 3,
    destinationFloor: 1,
    moving: false,
  },
];

function App() {
  const [elevatorState, dispatch] = useReducer(
    elevatorReducer,
    initialElevatorData
  );

  return (
    <div className="App">
      <CallButtonsContainer
        elevatorState={elevatorState}
        elevatorDispatch={dispatch}
      />
      <Wrapper>
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
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

export default App;
