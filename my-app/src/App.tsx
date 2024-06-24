import "./App.css";
import { useState } from "react";
import CallButtonsContainer from "./components/CallButtonsContainer";
import Elevator from "./components/Elevator";
import { ElevatorType } from "./model/types";

const initialElevatorData = {
  destinationFloor: 1,
  moving: false,
};

function App() {
  const [firstElevator, setFirstElevator] =
    useState<ElevatorType>(initialElevatorData);

  return (
    <div className="App">
      <CallButtonsContainer setFirstElevator={setFirstElevator} />
      <Elevator
        elevatorData={firstElevator}
        setElevatorData={setFirstElevator}
      />
    </div>
  );
}

export default App;
