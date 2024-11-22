import { GameBoard } from "../src/GameBoard";

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
  const gameBoard = new GameBoard(4, 4);
  expect(gameBoard.placeShip(2, 2, 2, 1)).toBeTruthy();
});

test("check if Ship has string as coordinates", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, "qwe", 2, 1)).toThrow(
    "Invalid Ship coordinates"
  );
});

test("check if Ship has whole number as coordinates", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, 2.1, 2, 1)).toThrow(
    "Invalid Ship coordinates ( Float coordinates )"
  );
});

test("check if given ship coordinates is inside Game Board", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(5, 5, 2, 1)).toThrow("Out of boundary");
});

test("check if Ship length is whole number", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, 2, 2.1, 1)).toThrow(
    "Invalid Ship Length ( Float length )"
  );
});

test("check if Ship length is Greater than zero", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, 2, 0, 1)).toThrow(
    "Ship length must be Greater than zero"
  );
});
test("check if Ship length is Strictly positive", () => {
  const gameBoard = new GameBoard(4, 4);
  expect(() => gameBoard.placeShip(2, 2, -1, 1)).toThrow(
    "Ship length must be Greater than zero"
  );
});
