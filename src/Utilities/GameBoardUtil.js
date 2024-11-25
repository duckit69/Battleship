import {
  isNumber,
  isStrictlyPositive,
  isWholeNumber,
  validateGivenCoordinates,
} from "./Utilities";
import { validateHorizontalShip, validateVerticalShip } from "./ShipUtil";

function validateGameBoardParams(rows, cols) {
  if (!isNumber(rows) || !isNumber(cols)) throw Error("Invalid params");
  if (!isStrictlyPositive(cols) || !isStrictlyPositive(rows))
    throw Error("GameBoard size must be greater than zero");
  if (!isWholeNumber(rows) || !isWholeNumber(cols))
    throw Error("Invalid GameBoard size");
}

function checkPathIsEmpty(x, y, length, direction, board, rows, cols) {
  if (direction == "vertical") {
    validateVerticalShip(x, length, rows);
    while (length--) {
      if (isCellOccuppied(x, y, board, rows, cols))
        throw Error("A ship already exist in this path");
      x += 1;
    }
  } else {
    validateHorizontalShip(y, length, cols);
    while (length--) {
      if (isCellOccuppied(x, y, board, rows, cols))
        throw Error("A ship already exist in this path");
      y += 1;
    }
  }
}

function isCellOccuppied(x, y, board, rows, cols) {
  if (!validateGivenCoordinates(x, y, rows, cols))
    throw Error("Cell is out of boundary");
  if (board[x][y] !== ".") return true;
  return false;
}

function placeShipVertically(x, y, length, board, ship, map) {
  while (length--) {
    board[x][y] = "S";
    map.set(buildKey(x, y), ship);
    x += 1;
  }
}
function placeShipHorizontally(x, y, length, board, ship, map) {
  while (length--) {
    board[x][y] = "S";
    map.set(buildKey(x, y), ship);
    y += 1;
  }
}

function buildKey(x, y) {
  return x.toString() + "," + y.toString();
}

function getValue(x, y, map) {
  const key = buildKey(x, y);
  return map.get(key);
}

export {
  validateGameBoardParams,
  isCellOccuppied,
  checkPathIsEmpty,
  placeShipHorizontally,
  placeShipVertically,
  buildKey,
  getValue,
};
