class Ship {
  constructor(length) {
    this.length = length;
    this.hit = 0;
  }

  hit() {
    if (this.isSunk()) throw Error("Ship is sunk!");
    this.hit += 1;
  }

  isSunk() {
    return this.hit == this.length;
  }
}

export {Ship};
