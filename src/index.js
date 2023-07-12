import "./styles.css";
import "./ship.js";
import "./gameboards.js";
import "./drag-and-drop.js";
import "./dom.js";
import Gameboard from "./gameboards.js";
import Player from "./players";
import { dragAndDrop } from "./drag-and-drop.js";
import { createGameboardTwoDom, createBoardsOne, moveStuff } from "./dom.js";

export const gameboardOne = new Gameboard();
export const gameboardTwo = new Gameboard();

createGameboardTwoDom();
createBoardsOne();
dragAndDrop();

document.querySelector("button").addEventListener("click", () => {
  moveStuff();
});

console.log(gameboardTwo);
gameboardTwo.placeShipsRandomly();
console.log(gameboardTwo);
