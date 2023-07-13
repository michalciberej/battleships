export default class Player {
  constructor(hasPriority, score = 0) {
    this.hasPriority = hasPriority;
    this.score = score;
  }

  updateScore() {
    this.score++;
  }
}
