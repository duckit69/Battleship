import { Ship } from "../src/Ship";

test("isSunk() check if ship is not sunk", () => {
  const ship = new Ship(2, 2, 2, "vertical");
  expect(ship.isSunk()).toBeFalsy();
});

test("isSunk() check if ship is sunk", () => {
  const ship = new Ship(2, 2, 2, "vertical");
  ship.recieveHit();
  ship.recieveHit();
  expect(ship.isSunk()).toBeTruthy();
});

test("recieveHit() increase the hit count", () => {
  const ship = new Ship(2, 2, 2, "vertical");
  ship.recieveHit();
  ship.recieveHit();
  expect(() => ship.recieveHit()).toThrow("Ship is sunk");
});
