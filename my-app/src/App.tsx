import "./App.css";
import { useReducer } from "react";
import styled from "styled-components";
import CallButtonsContainer from "./components/CallButtonsContainer";
import Elevator from "./components/Elevator";
import { ElevatorType } from "./model/types";
import { elevatorReducer } from "./reducers/elevatorReducer";

const initialElevatorData: ElevatorType[] = [
  {
    destinationFloor: 1,
    moving: false,
  },
  {
    destinationFloor: 1,
    moving: false,
  },
  {
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
      <CallButtonsContainer elevatorDispatch={dispatch} />
      <Wrapper>
        {elevatorState.map((elevatorObj, index) => {
          return (
            <Elevator
              key={`elevator-${index}`}
              elevatorData={elevatorObj}
              elevatorDispatch={dispatch}
              elevatorNum={index}
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
