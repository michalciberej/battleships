import { gameboardTwo } from "./index";

export function createGameboardTwoDom() {
  const gameboardTwoDOM = document.createElement("div");
  gameboardTwoDOM.setAttribute("id", "gameboardTwo");
  gameboardTwoDOM.classList.add("gameboards");

  const gamebordsContainer = document.querySelector("#gameboardsContainer");
  gamebordsContainer.appendChild(gameboardTwoDOM);
}

function removeShipContainer() {
  document.querySelector("#shipsContainer").remove();
}

function removeStartButton() {
  document.querySelector("button").remove();
}

export function createBoardsOne() {
  const gameboardOneDOM = document.querySelector("#gameboardOne");

  const size = 10;

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const board = document.createElement("div");
      board.classList.add("boards");
      board.setAttribute("data-row", i);
      board.setAttribute("data-column", j);
      gameboardOneDOM.appendChild(board);
    }
  }
}

export function createBoardsTwo() {
  const gameboardTwoDOM = document.querySelector("#gameboardTwo");

  const size = 10;

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const board = document.createElement("div");
      board.classList.add("boards");
      board.setAttribute("data-row", i);
      board.setAttribute("data-column", j);
      board.addEventListener(
        "click",
        (e) => {
          gameboardTwo.recieveAttack(
            e.target.dataset.row,
            e.target.dataset.column,
            e.target
          );
          e.target.classList.add("water");
        },

        { once: true }
      );
      gameboardTwoDOM.appendChild(board);
    }
  }
}

export function moveStuff() {
  const gameboardOneDOM = document.querySelector("#gameboardOne");
  const gameboardTwoDOM = document.querySelector("#gameboardTwo");

  createBoardsTwo();

  removeShipContainer();
  removeStartButton();

  gameboardOneDOM.style.transform = "scale(0.8) translate(-2rem)";

  gameboardTwoDOM.style.transform = "scale(1)";
  gameboardTwoDOM.style.position = "relative";
}
