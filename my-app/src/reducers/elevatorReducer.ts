import { ElevatorType } from "../model/types";

export type ActionType =
  | { type: "setDestination"; index: number; destinationFloor: number }
  | { type: "stopMoving"; index: number };

export function elevatorReducer(state: ElevatorType[], action: ActionType) {
  switch (action.type) {
    case "setDestination":
      return [...state].map((eachElevator, i) => {
        const { destinationFloor, index } = action;
        return i === index
          ? {
              ...eachElevator,
              destinationFloor: destinationFloor,
              moving: true,
            }
          : { ...eachElevator };
      });
    case "stopMoving":
      return [...state].map((eachElevator, i) => {
        const { index } = action;
        return i === index
          ? { ...eachElevator, moving: false }
          : { ...eachElevator };
      });
  }
}
