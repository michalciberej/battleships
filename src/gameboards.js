import Ship from "./ship.js";
import isGameOver from "./gamelogic.js";
import { gameboardOne } from "./index.js";
import { player, computer } from "./index.js";
export default class Gameboard {
  constructor(ships = [], shots = []) {
    this.ships = ships;
    this.shots = shots;
  }

  addShip(coordRow, coordColumn, ship) {
    const temp = [];
    const tempTwo = [];
    if (ship.dir === "row") {
      for (let i = 0; i < ship.size; i++) {
        temp.push(parseInt(coordRow));
        tempTwo.push(parseInt(coordColumn) + i);
      }
    }
    if (ship.dir === "column") {
      for (let i = 0; i < ship.size; i++) {
        temp.push(parseInt(coordRow) + i);
        tempTwo.push(parseInt(coordColumn));
      }
    }

    if (isPlacementPossible(coordRow, coordColumn, ship, ship.dir)) {
      const x = [temp, tempTwo, ship];
      this.ships.push(x);
    }
  }

  addShipRandom(coordRow, coordColumn, ship, dir) {
    const temp = [];
    const tempTwo = [];
    if (dir === "row") {
      for (let i = 0; i < ship.size; i++) {
        temp.push(parseInt(coordRow));
        tempTwo.push(parseInt(coordColumn) + i);
      }
    }
    if (dir === "column") {
      for (let i = 0; i < ship.size; i++) {
        temp.push(parseInt(coordRow) + i);
        tempTwo.push(parseInt(coordColumn));
      }
    }
    const x = [temp, tempTwo, ship];
    this.ships.push(x);
  }

  recieveAttack(coordRow, coordColumn, e) {
    e.classList.add("water");
    this.ships.forEach((element) => {
      for (let i = 0; i < element[0].length; i++) {
        if (element[0][i] == coordRow && element[1][i] == coordColumn) {
          e.classList.remove("water");
          e.classList.add("ship");
          element[2].hit();
          element[2].sink();
          player.updateScore();
          isGameOver(player, computer);
          break;
        }
      }
    });
    gameboardOne.recieveRandomAttack();
  }

  recieveRandomAttack() {
    let row = Math.floor(Math.random() * 10) + 1;
    let column = Math.floor(Math.random() * 10) + 1;
    let cell = document.querySelector(
      `#gameboardOne > .boards[data-row="${row}"][data-column="${column}"]`
    );
    let num = 0;
    cell.classList.add("water");
    this.ships.forEach((element) => {
      for (let i = 0; i < element[0].length; i++) {
        if (element[0][i] == row && element[1][i] == column) {
          cell.classList.remove("water");
          cell.classList.add("ship");
          element[2].hit();
          element[2].sink();
          computer.updateScore();
          isGameOver(player, computer);
          num++;
          break;
        }
      }
    });
    if (this.isCellEmpty(row, column) && num < 1) this.recieveRandomAttack();
    this.shots.push([row, column]);
  }

  isCellEmpty(row, column) {
    let empty = false;

    gameboardOne.ships.forEach((element) => {
      for (let i = 0; i < element[0].length; i++) {
        if (element[0][i] == row && element[1][i] == column) {
          return (empty = true);
        }
      }
    });
    gameboardOne.shots.forEach((element) => {
      if (element[0] == row && element[1] == column) {
        return (empty = true);
      }
    });
    return empty;
  }

  placeShipsRandomly() {
    const ships = [];
    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const destroyerOne = new Ship(3);
    const destroyerTwo = new Ship(3);
    const submarineOne = new Ship(2);
    const submarineTwo = new Ship(2);
    ships.push(
      carrier,
      battleship,
      destroyerOne,
      destroyerTwo,
      submarineOne,
      submarineTwo
    );
    let correctPlacement = 0;

    while (correctPlacement <= 5) {
      const row = Math.floor(Math.random() * 10) + 1;
      const column = Math.floor(Math.random() * 10) + 1;
      const dir = Math.floor(Math.random() * 2) === 1 ? "row" : "column";
      if (isPlacementPossible(row, column, ships[correctPlacement].size, dir)) {
        ships[correctPlacement].dir = dir;
        this.addShipRandom(row, column, ships[correctPlacement], dir);
        correctPlacement++;
      }
    }
  }
}

export function isPlacementPossible(row, column, size, dir) {
  let result = true;

  if (row <= 0 || row > 10 || column <= 0 || column > 10) result = false;

  if (size == 5) {
    if (column > 6 && dir == "row") result = false;
    if (row > 6 && dir == "column") result = false;
  }

  if (size == 4) {
    if (column > 7 && dir == "row") result = false;
    if (row > 7 && dir == "column") result = false;
  }

  if (size == 3) {
    if (column > 8 && dir == "row") result = false;
    if (row > 8 && dir == "column") result = false;
  }

  if (size == 2) {
    if (column > 9 && dir == "row") result = false;
    if (row > 9 && dir == "column") result = false;
  }

  gameboardOne.ships.forEach((element) => {
    for (let i = 0; i < element[0].length; i++) {
      if (element[0][i] == row && element[1][i] == column) {
        return (result = false);
      }
    }
  });

  return result;
}
