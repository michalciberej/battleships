import { gameboardOne } from "./index";
import { isPlacementPossible } from "./gameboards";
import Ship from "./ship";

export default function dragAndDrop() {
  const carrierDom = document.querySelector("#carrier");
  const battleshipDom = document.querySelector("#battleship");
  const destroyerOneDom = document.querySelector("#destroyerOne");
  const destroyerTwoDom = document.querySelector("#destroyerTwo");
  const submarineOneDom = document.querySelector("#submarineOne");
  const submarineTwoDom = document.querySelector("#submarineTwo");

  carrierDom.addEventListener("dragstart", (e) => drag(e));
  battleshipDom.addEventListener("dragstart", (e) => drag(e));
  destroyerOneDom.addEventListener("dragstart", (e) => drag(e));
  destroyerTwoDom.addEventListener("dragstart", (e) => drag(e));
  submarineOneDom.addEventListener("dragstart", (e) => drag(e));
  submarineTwoDom.addEventListener("dragstart", (e) => drag(e));

  carrierDom.addEventListener("contextmenu", (e) => rotate(e));
  battleshipDom.addEventListener("contextmenu", (e) => rotate(e));
  destroyerOneDom.addEventListener("contextmenu", (e) => rotate(e));
  destroyerTwoDom.addEventListener("contextmenu", (e) => rotate(e));
  submarineOneDom.addEventListener("contextmenu", (e) => rotate(e));
  submarineTwoDom.addEventListener("contextmenu", (e) => rotate(e));

  const towers = document.querySelectorAll(".tower");
  for (const tower of towers) {
    tower.addEventListener("contextmenu", (e) => towerRotate(e));
  }

  const boards = document.querySelectorAll(".boards");
  for (let board of boards) {
    board.addEventListener("dragover", (e) => allowDrop(e));
    board.addEventListener("drop", (e) => {
      const ship = e.dataTransfer.getData("ship");
      drop(e);
      gameboardOne.addShip(
        e.originalTarget.dataset.row,
        e.originalTarget.dataset.column,
        new Ship(
          document.querySelector(`#${ship}`).dataset.size,
          document.querySelector(`#${ship}`).dataset.dir
        )
      );
    });
  }
}

function rotate(e) {
  e.preventDefault();
  if (e.originalTarget.dataset.size == 5) {
    if (e.originalTarget.dataset.dir === "row") {
      e.originalTarget.style.flexDirection = "column";
      e.originalTarget.dataset.dir = "column";
      e.originalTarget.style.width = "2rem";
      e.originalTarget.style.height = "10rem";
    } else if (e.originalTarget.dataset.dir === "column") {
      e.originalTarget.style.flexDirection = "row";
      e.originalTarget.dataset.dir = "row";
      e.originalTarget.style.width = "10rem";
      e.originalTarget.style.height = "2rem";
    }
  }
  if (e.originalTarget.dataset.size == 4) {
    if (e.originalTarget.dataset.dir === "row") {
      e.originalTarget.style.flexDirection = "column";
      e.originalTarget.dataset.dir = "column";
      e.originalTarget.style.width = "2rem";
      e.originalTarget.style.height = "8rem";
    } else if (e.originalTarget.dataset.dir === "column") {
      e.originalTarget.style.flexDirection = "row";
      e.originalTarget.dataset.dir = "row";
      e.originalTarget.style.width = "8rem";
      e.originalTarget.style.height = "2rem";
    }
  }
  if (e.originalTarget.dataset.size == 3) {
    if (e.originalTarget.dataset.dir === "row") {
      e.originalTarget.style.flexDirection = "column";
      e.originalTarget.dataset.dir = "column";
      e.originalTarget.style.width = "2rem";
      e.originalTarget.style.height = "6rem";
    } else if (e.originalTarget.dataset.dir === "column") {
      e.originalTarget.style.flexDirection = "row";
      e.originalTarget.dataset.dir = "row";
      e.originalTarget.style.width = "6rem";
      e.originalTarget.style.height = "2rem";
    }
  }
  if (e.originalTarget.dataset.size == 2) {
    if (e.originalTarget.dataset.dir === "row") {
      e.originalTarget.dataset.dir = "column";
      e.originalTarget.style.width = "2rem";
      e.originalTarget.style.height = "4rem";
    } else if (e.originalTarget.dataset.dir === "column") {
      e.originalTarget.dataset.dir = "row";
      e.originalTarget.style.width = "4rem";
      e.originalTarget.style.height = "2rem";
    }
  }
}
function towerRotate(e) {
  e.preventDefault();
  const target = e.srcElement.parentElement;
  if (target.dataset.size == 5) {
    if (target.dataset.dir === "row") {
      target.style.flexDirection = "column";
      target.dataset.dir = "column";
      target.style.width = "2rem";
      target.style.height = "10rem";
    } else if (target.dataset.dir === "column") {
      target.style.flexDirection = "row";
      target.dataset.dir = "row";
      target.style.width = "10rem";
      target.style.height = "2rem";
    }
  }
  if (target.dataset.size == 4) {
    if (target.dataset.dir === "row") {
      target.style.flexDirection = "column";
      target.dataset.dir = "column";
      target.style.width = "2rem";
      target.style.height = "8rem";
    } else if (target.dataset.dir === "column") {
      target.style.flexDirection = "row";
      target.dataset.dir = "row";
      target.style.width = "8rem";
      target.style.height = "2rem";
    }
  }
  if (target.dataset.size == 3) {
    if (target.dataset.dir === "row") {
      target.style.flexDirection = "column";
      target.dataset.dir = "column";
      target.style.width = "2rem";
      target.style.height = "6rem";
    } else if (target.dataset.dir === "column") {
      target.style.flexDirection = "row";
      target.dataset.dir = "row";
      target.style.width = "6rem";
      target.style.height = "2rem";
    }
  }
  if (target.dataset.size == 2) {
    if (target.dataset.dir === "row") {
      target.dataset.dir = "column";
      target.style.width = "2rem";
      target.style.height = "4rem";
    } else if (target.dataset.dir === "column") {
      target.dataset.dir = "row";
      target.style.width = "4rem";
      target.style.height = "2rem";
    }
  }
}
function drag(e) {
  e.dataTransfer.setData("ship", e.originalTarget.id);
}
function allowDrop(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  const shipId = e.dataTransfer.getData("ship");
  const ship = document.querySelector(`#${shipId}`);
  if (
    isPlacementPossible(
      e.originalTarget.dataset.row,
      e.originalTarget.dataset.column,
      ship,
      ship.dir
    )
  )
    e.target.appendChild(document.querySelector(`#${shipId}`));
}
