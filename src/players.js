import Ship from "./ship";
import { gameboardTwo } from "./index";
export default class Player {
  constructor(hasPriority, ships = false) {
    this.hasPriority = hasPriority;
    this.ships = ships;
  }
}
