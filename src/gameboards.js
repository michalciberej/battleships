export class Gameboard {
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
}
