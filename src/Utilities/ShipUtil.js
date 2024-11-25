import {
  isNumber,
  isStrictlyPositive,
  isWholeNumber,
  validateGivenCoordinates,
} from "./Utilities";

function validateShipParams(x, y, length, direction, rows, cols) {
  // validate coordinates
  validateGivenCoordinates(x, y, rows, cols);
  // validate length
  if (!isNumber(length)) throw Error("Invalid Ship Length");
  if (!isStrictlyPositive(length))
    throw Error("Ship length must be Greater than zero");
  if (!isWholeNumber(length))
    throw Error("Invalid Ship Length ( Float length )");
  // validate direction
  if (!validateShipDirection(direction)) throw Error("Invalid Direction value");
}

function validateShipDirection(direction) {
  if (direction !== "vertical" && direction !== "horizontal") return false;
  return true;
}
function validateVerticalShip(x, length, rows) {
  if (x + length - 1 >= rows) throw Error("Ship is Out of boundaries");
}
function validateHorizontalShip(y, length, cols) {
  if (y + length - 1 >= cols) throw Error("Ship is Out of boundaries");
}

export { validateShipParams, validateVerticalShip, validateHorizontalShip };
