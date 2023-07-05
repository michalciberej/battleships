/* eslint-disable no-undef */
import { hit } from "../src/ship-factory.js";

test("Hit ship", () => {
  const ship = { length: 3, hit: 0, isSunk: false };
  expect(hit(ship)).toEqual({ length: 3, hit: 1, isSunk: false });
});
