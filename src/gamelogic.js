import { gameboardOne, gameboardTwo } from ".";
import { generateModal } from "./dom";
import { score } from "./gameboards";

export default function isGameOver() {
  if (score(gameboardTwo)) generateModal("You win");
  if (score(gameboardOne)) generateModal("Enemy wins");
}
