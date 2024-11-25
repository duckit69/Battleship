import { GameBoard } from "../src/GameBoard";
import { Ship } from "../src/Ship";

// Constructor
test("check if gameBoard params are numbers", () => {
  expect(() => new GameBoard("qwe", "qe")).toThrow("Invalid params");
});

test("check if gameBoard params are whole numbers", () => {
  expect(() => new GameBoard(2.5, 52.1)).toThrow("Invalid GameBoard size");
});

test("check if gameBoard params are not zeros ", () => {
  expect(() => new GameBoard(0, 0)).toThrow(
    "GameBoard size must be greater than zero"
  );
});

test("check if gameBoard params are positive ", () => {
  expect(() => new GameBoard(-1, 0)).toThrow(
    "GameBoard size must be greater than zero"
  );
});
// Place Ship method
test("check if Ship is created from GameBoard", () => {
  const gameBoard = new GameBoard(9, 9);
  expect(gameBoard.placeShip(0, 0, 2, "vertical")).toBeTruthy();
});
test("check Ship Boundaries", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(4, 4, 2, "vertical")).toThrow(
    "Invalid coordinates"
  );
});

test("check if Ship has string as coordinates", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, "qwe", 2, "vertical")).toThrow(
    "Invalid coordinates"
  );
});

test("check if Ship has whole number as coordinates", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, 2.1, 2, "vertical")).toThrow(
    "Invalid coordinates"
  );
});

test("check if given ship coordinates is inside Game Board", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(5, 5, 2, "vertical")).toThrow(
    "Invalid coordinates"
  );
});

test("check if Ship length is whole number", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, 2, 2.1, "vertical")).toThrow(
    "Invalid Ship Length ( Float length )"
  );
});

test("check if Ship length is Greater than zero", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, 2, 0, "vertical")).toThrow(
    "Ship length must be Greater than zero"
  );
});
test("check if Ship length is Strictly positive", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, 2, -1, "vertical")).toThrow(
    "Ship length must be Greater than zero"
  );
});

test("check if Ship Direction is horizontal or vertical", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, 2, 2, 2)).toThrow(
    "Invalid Direction value"
  );
});

test("check if Ship Direction is horizontal or vertical", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, 2, 2, "string")).toThrow(
    "Invalid Direction value"
  );
});

test("check if Ship occupy position in board", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(1, 2, 2, "vertical");
  expect(gameBoard.getCell(1, 2)).not.toBe(".");
  expect(gameBoard.getCell(2, 2)).not.toBe(".");
});
test("check if Ship length and direction keeps it in board (vertical test)", () => {
  const gameBoard = new GameBoard(5, 5);
  expect(() => gameBoard.placeShip(3, 3, 3, "vertical")).toThrow(
    "Ship is Out of boundaries"
  );
});
test("check if Ship length and direction keeps it in board (horizontal test)", () => {
  const gameBoard = new GameBoard(5, 5);
  expect(() => gameBoard.placeShip(3, 3, 3, "horizontal")).toThrow(
    "Ship is Out of boundaries"
  );
});

test("check if Ship overlap another ship (horizontal test)", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(0, 2, 4, "vertical");
  expect(() => gameBoard.placeShip(3, 0, 4, "horizontal")).toThrow(
    "A ship already exist in this path"
  );
});

test("check if Ship overlap another ship (vertical test)", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(2, 0, 4, "horizontal");
  expect(() => gameBoard.placeShip(0, 2, 4, "vertical")).toThrow(
    "A ship already exist in this path"
  );
});

// recieve attack function

test("check recieve attack function input", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(0, 0, 2, "vertical");
  gameBoard.placeShip(4, 1, 2, "horizontal");
  expect(gameBoard.recieveAttack(1, 2)).toBeTruthy();
});

test("check recieve attack function input (string as input)", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(0, 0, 2, "vertical");
  gameBoard.placeShip(4, 1, 2, "horizontal");
  expect(() => gameBoard.recieveAttack("1", 2)).toThrow("Invalid coordinates");
});

test("check recieve attack function input (obj as input)", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(0, 0, 2, "vertical");
  gameBoard.placeShip(4, 1, 2, "horizontal");
  const obj = {
    name: "name",
  };
  expect(() => gameBoard.recieveAttack(obj, 2)).toThrow("Invalid coordinates");
});

test("check recieve attack function input (out of boundaries)", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(0, 0, 2, "vertical");
  gameBoard.placeShip(4, 1, 2, "horizontal");
  expect(() => gameBoard.recieveAttack(5, 5)).toThrow("Invalid coordinates");
});

test("check our attack is registered", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(0, 0, 2, "vertical");
  gameBoard.placeShip(4, 1, 2, "horizontal");
  gameBoard.recieveAttack(0, 0);
  expect(gameBoard.getCell(0, 0)).toBe("X");
});
test("check if we can attack the same cell again", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(0, 0, 2, "vertical");
  gameBoard.placeShip(4, 1, 2, "horizontal");
  gameBoard.recieveAttack(0, 0);
  expect(() => gameBoard.recieveAttack(0, 0)).toThrow(
    "You can not attack same cell twice"
  );
});

test("check if ship register attack", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(0, 0, 2, "vertical");
  gameBoard.placeShip(4, 1, 2, "horizontal");
  gameBoard.recieveAttack(0, 0);
  gameBoard.recieveAttack(1, 0);
  expect(gameBoard.getShip(0, 0).isSunk()).toBeTruthy();
});
test("check if board track missedShots", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(0, 0, 2, "vertical");
  gameBoard.placeShip(4, 1, 2, "horizontal");
  gameBoard.recieveAttack(0, 0);
  gameBoard.recieveAttack(1, 0);
  expect(gameBoard.getMissedShots()).toBe(0);
});
test("check if board track missedShots", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(0, 0, 2, "vertical");
  gameBoard.placeShip(4, 1, 2, "horizontal");
  gameBoard.recieveAttack(0, 0);
  gameBoard.recieveAttack(1, 0);
  gameBoard.recieveAttack(2, 2);
  gameBoard.recieveAttack(4, 2);
  expect(gameBoard.getMissedShots()).toBe(1);
});

test("check if board track missedShots", () => {
  const gameBoard = new GameBoard(5, 5);
  gameBoard.placeShip(0, 0, 2, "vertical");
  gameBoard.recieveAttack(0, 0);
  gameBoard.recieveAttack(1, 0);
  expect(gameBoard.recieveAttack(2, 2)).toBeTruthy();
});
