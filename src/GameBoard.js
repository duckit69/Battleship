import { Ship } from "./Ship";
import {
  validateGameBoardParams,
  checkPathIsEmpty,
  placeShipHorizontally,
  placeShipVertically,
} from "./Utilities/GameBoardUtil";

class GameBoard {
  constructor(rows, cols) {
    validateGameBoardParams(rows, cols);
    this.rows = rows;
    this.cols = cols;
    this.board = Array.from({ length: rows }, () => new Array(cols).fill("."));
    this.ships = [];
  }

  // Ship related Methods
  placeShip(x, y, length, direction) {
    const ship = new Ship(x, y, length, direction, this.rows, this.cols);
    this.ships.push(ship);

    this.occupyArea(x, y, length, direction);

    return true;
  }

  occupyArea(x, y, length, direction) {
    checkPathIsEmpty(x, y, length, direction, this.board, this.rows, this.cols);
    if (direction == "vertical") placeShipVertically(x, y, length, this.board);
    if (direction == "horizontal")
      placeShipHorizontally(x, y, length, this.board);
  }

  getCell(x, y) {
    return this.board[x][y];
  }
}

export { GameBoard };
