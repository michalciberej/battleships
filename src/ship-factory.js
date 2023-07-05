export const Ship = (length, hit = 0, isSunk = false) => {
  return { length, hit, isSunk };
};

export function hit(ship) {
  ship.hit = ship.hit + 1;
  return ship;
}

export function isSunk(ship) {
  if (ship.length === ship.hit) {
    ship.isSunk = true;
    return ship;
  } else {
    return ship;
  }
}
