class GameBoard {
  constructor(rows, cols) {
    this.validateGameBoardParams(rows, cols);
    this.rows = rows;
    this.cols = cols;
    this.ships = Array.from({ length: rows }, () => new Array(cols).fill("."));
  }
  validateGameBoardParams(rows, cols) {
    if (!this.checkIfNumber(rows) || !this.checkIfNumber(cols))
      throw Error("Invalid params");
    if (
      !this.checkIfStrictlyPositive(cols) ||
      !this.checkIfStrictlyPositive(rows)
    )
      throw Error("GameBoard size must be greater than zero");
    if (!this.checkIfWholeNumber(rows) || !this.checkIfWholeNumber(cols))
      throw Error("Invalid GameBoard size");
  }
  // Ship related Methods
  placeShip(x, y, length, direction) {
    this.validateShipParams(x, y, length, direction);
    return true;
  }
  validateShipParams(x, y, length, direction) {
    // validate coordinates
    if (!this.validateShipCoordinates(x, y)) throw Error("Out of boundary");
    if (!this.checkIfNumber(x) || !this.checkIfNumber(y))
      throw Error("Invalid Ship coordinates");
    if (!this.checkIfWholeNumber(x) || !this.checkIfWholeNumber(y))
      throw Error("Invalid Ship coordinates ( Float coordinates )");
    // validate length
    if (!this.checkIfNumber(length)) throw Error("Invalid Ship Length");
    if (!this.checkIfStrictlyPositive(length))
      throw Error("Ship length must be Greater than zero");
    if (!this.checkIfWholeNumber(length))
      throw Error("Invalid Ship Length ( Float length )");
    // validate direction
  }
  validateShipCoordinates(x, y) {
    if (y >= this.cols || y < 0 || x >= this.rows || x < 0) return false;
    return true;
  }

  // Utilities
  checkIfNumber(x) {
    return typeof x == "number";
  }
  checkIfWholeNumber(x) {
    return x % 2 == 0;
  }
  checkIfStrictlyPositive(x) {
    return x > 0;
  }
  checkIfPositive(x) {
    return x >= 0;
  }
}

export { GameBoard };
