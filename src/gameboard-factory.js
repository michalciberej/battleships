import { Ship } from "./ship-factory";

export class Gameboard {
  constructor(ships = [], missedShots = []) {
    this.ships = ships;
    this.missedShots = missedShots;
  }

  addShip(size, coordOne, coordTwo) {
    const x = [coordOne, coordTwo, new Ship(size)];
    this.ships.push(x);
  }

  recieveAttack(coordOne, coordTwo) {
    this.ships.forEach((element) => {
      if (element[0] === coordOne && element[1] === coordTwo) {
        element[2].hit();
      }
    });
    this.missedShots.push([coordOne, coordTwo]);
  }
}
