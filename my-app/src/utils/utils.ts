import { ElevatorType } from "../model/types";

export function filterNotMovingElevator(elevators: ElevatorType[]) {
  return elevators.filter((elevator: ElevatorType) => !elevator.moving);
}

export function findLeastFloorDiffElevator(
  elevators: ElevatorType[],
  num: number
) {
  return elevators.reduce((prev, current) => {
    const prevDifference = prev.destinationFloor - num;
    const currentDifference = current.destinationFloor - num;
    return currentDifference < prevDifference ? current : prev;
  });
}
