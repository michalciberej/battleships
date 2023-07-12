export default class Ship {
  constructor(size, dir = "row", hits = 0, isSunk = false) {
    this.size = size;
    this.dir = dir;
    this.hits = hits;
    this.isSunk = isSunk;
  }

  hit() {
    this.hits = this.hits + 1;
  }

  sink() {
    if (this.hits === this.size) this.isSunk = true;
  }
}
