import Ship from "./ship";
export default class Gameboard {
  constructor(ships = []) {
    this.ships = ships;
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

    const x = [temp, tempTwo, ship];
    this.ships.push(x);
  }

  addShipRandom(coordRow, coordColumn, ship, dir) {
    const temp = [];
    const tempTwo = [];
    if (dir === true) {
      for (let i = 0; i < ship.size; i++) {
        temp.push(parseInt(coordRow));
        tempTwo.push(parseInt(coordColumn) + i);
      }
    }
    if (dir === false) {
      for (let i = 0; i < ship.size; i++) {
        temp.push(parseInt(coordRow) + i);
        tempTwo.push(parseInt(coordColumn));
      }
    }

    const x = [temp, tempTwo, ship];
    this.ships.push(x);
  }

  recieveAttack(coordRow, coordColumn, e) {
    this.ships.forEach((element) => {
      for (let i = 0; i < element[0].length; i++) {
        if (element[0][i] == coordRow && element[1][i] == coordColumn) {
          e.classList.remove("water");
          e.classList.add("ship");
          element[2].hit();
          element[2].sink();
          break;
        }
      }
    });
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
      const row = Math.floor(Math.random() * 10);
      const column = Math.floor(Math.random() * 10);
      const dir = Math.floor(Math.random() * 2) === 1 ? true : false;
      console.log(1);
      if (isPlacementPossible(row, column, ships[correctPlacement], dir)) {
        this.addShipRandom(row, column, ships[correctPlacement], dir);
        correctPlacement++;
        console.log(2);
      }
    }
  }
}

function isPlacementPossible(
  row = null,
  column = null,
  ship = null,
  dir = null
) {
  const size = ship.size;
  if (row <= 0 || row > 10 || column <= 0 || column > 10) return false;

  if (size === 5) {
    if (row > 6 && dir === "row") return false;
    if (column > 6 && dir === "column") return false;
  }

  if (size === 4) {
    if (row > 7 && dir === "row") return false;
    if (column > 7 && dir === "column") return false;
  }

  if (size === 3) {
    if (row > 8 && dir === "row") return false;
    if (column > 8 && dir === "column") return false;
  }

  if (size === 2) {
    if (row > 9 && dir === "row") return false;
    if (column > 9 && dir === "column") return false;
  }

  return true;
}
