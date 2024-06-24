import { ElevatorType } from "../model/types";

export type ActionType =
  | { type: "setDestination"; id: number; destinationFloor: number }
  | { type: "stopMoving"; id: number };

export function elevatorReducer(state: ElevatorType[], action: ActionType) {
  switch (action.type) {
    case "setDestination":
      return [...state].map((eachElevator) => {
        const { destinationFloor, id } = action;
        return eachElevator.id === id
          ? {
              ...eachElevator,
              destinationFloor: destinationFloor,
              moving: true,
            }
          : { ...eachElevator };
      });
    case "stopMoving":
      return [...state].map((eachElevator) => {
        const { id } = action;
        return eachElevator.id === id
          ? { ...eachElevator, moving: false }
          : { ...eachElevator };
      });
  }
}
