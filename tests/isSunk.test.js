/* eslint-disable */
import { isSunk } from "../src/ship-factory";

test("Sunk ship", () => {
  const shipOne = { length: 3, hit: 2, isSunk: false };
  const shipTwo = { length: 3, hit: 3, isSunk: false };
  expect(isSunk(shipOne)).toEqual({ length: 3, hit: 2, isSunk: false });
  expect(isSunk(shipTwo)).toEqual({ length: 3, hit: 3, isSunk: true });
});
