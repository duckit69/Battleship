import { Ship } from "./Ship";
import {
  validateGameBoardParams,
  checkPathIsEmpty,
  placeShipHorizontally,
  placeShipVertically,
  buildKey,
  getValue,
} from "./Utilities/GameBoardUtil";
import { validateGivenCoordinates } from "./Utilities/Utilities";

class GameBoard {
  constructor(rows, cols) {
    validateGameBoardParams(rows, cols);
    this.rows = rows;
    this.cols = cols;
    this.board = Array.from({ length: rows }, () => new Array(cols).fill("."));
    this.ships = [];
    this.totalShips = 0;
    this.map = new Map();
    this.missedShots = 0;
  }

  // Ship related Methods
  placeShip(x, y, length, direction) {
    const ship = new Ship(x, y, length, direction, this.rows, this.cols);
    this.ships.push(ship);
    this.totalShips += 1;
    this.occupyArea(x, y, length, direction, ship, this.map);

    return true;
  }

  occupyArea(x, y, length, direction, ship) {
    checkPathIsEmpty(x, y, length, direction, this.board, this.rows, this.cols);
    if (direction == "vertical")
      placeShipVertically(x, y, length, this.board, ship, this.map);
    if (direction == "horizontal")
      placeShipHorizontally(x, y, length, this.board, ship, this.map);
  }

  recieveAttack(x, y) {
    validateGivenCoordinates(x, y, this.rows, this.cols);
    this.checkIfCellIsAttacked(x, y);
    this.markAttackedCell(x, y);
    return true;
  }

  getCell(x, y) {
    return this.board[x][y];
  }

  checkIfCellIsAttacked(x, y) {
    // X Ship / Y missed Shot
    if (this.getCell(x, y) == "X" || this.getCell(x, y) == "Y")
      throw Error("You can not attack same cell twice");
  }

  markAttackedCell(x, y) {
    const ship = this.getShip(x, y, this.map);
    if (ship) this.shipAttack(x, y, ship);
    else this.increaseMissedShots();
  }
  increaseMissedShots() {
    this.missedShots += 1;
  }
  getMissedShots() {
    return this.missedShots;
  }

  getShip(x, y) {
    return getValue(x, y, this.map);
  }
  shipAttack(x, y, ship) {
    this.board[x][y] = "X";
    ship.recieveHit();
    if (ship.isSunk()) this.totalShips -= 1;
  }
  isAllShipsSunk() {
    return this.totalShips == 0;
  }
}

export { GameBoard };
