import { validateShipParams } from "./Utilities/ShipUtil";
class Ship {
  constructor(x, y, length, direction, rows, cols) {
    validateShipParams(x, y, length, direction, rows, cols);
    this.x = x;
    this.y = y;
    this.length = length;
    this.hit = 0;
    this.direction = direction;
  }

  recieveHit() {
    if (this.isSunk()) throw Error("Ship is sunk!");
    this.hit += 1;
  }

  isSunk() {
    return this.hit == this.length;
  }
}

export { Ship };
