export class Ship {
  constructor(size, hits = 0, isSunk = false) {
    this.size = size;
    this.hits = hits;
    this.isSunk = isSunk;
  }

  hit() {
    this.hits += 1;
  }

  sink() {
    if (this.hits === this.size) {
      this.isSunk = true;
    }
  }
}
