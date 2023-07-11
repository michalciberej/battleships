import "./styles.css";
import "./ship.js";
import "./gameboards.js";
import "./drag-and-drop.js";
import "./dom.js";
import { Gameboard } from "./gameboards.js";
import { dragAndDrop } from "./drag-and-drop.js";
import {
  createGameboardTwoDom,
  createBoardsOne,
  createBoardsTwo,
  moveStuff
} from "./dom.js";

export const gameboardOne = new Gameboard();
export const gameboardTwo = new Gameboard();

createGameboardTwoDom();
createBoardsOne();
dragAndDrop();

document.querySelector("button").addEventListener("click", () => {
  moveStuff();
});
