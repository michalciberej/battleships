/* eslint-disable */
import { Ship } from "../src/ship-factory";

test("Hit and sink ship", () => {
  const shipOne = new Ship(1);
  shipOne.hit();
  shipOne.sink();
  expect(shipOne).toEqual({ size: 1, hits: 1, isSunk: true });
});
