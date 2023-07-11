export class Player {
  constructor(priority = 0) {
    this.priority = priority;
  }
  passPriority() {
    this.priority = this.priority + 1;
  }
}
