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

  gameboardOneDOM.style.transform = "scale(0.8) translate(-2rem)";

  gameboardTwoDOM.style.transform = "scale(1)";
  gameboardTwoDOM.style.position = "relative";
}

export function generateModal(winner) {
  const modal = document.createElement("div");
  const overlay = document.createElement("div");

  modal.classList.add("modal");

  const button = document.createElement("button");
  button.textContent = "Play Again";
  button.classList.add("resetBtn");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
  });

  const hTwo = document.createElement("h2");
  hTwo.textContent = `${winner}`;
  overlay.classList.add("overlay");

  modal.appendChild(hTwo);
  modal.appendChild(button);

  document.querySelector("body").appendChild(modal);
  document.querySelector("body").appendChild(overlay);
}
