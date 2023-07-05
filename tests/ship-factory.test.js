/* eslint-disable no-undef */
import { ship } from "../src/ship-factory.js";

test("ship", () => {
  expect(ship()).toBe("a");
});
