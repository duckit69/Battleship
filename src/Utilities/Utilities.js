function isNumber(x) {
  return typeof x == "number";
}
function isWholeNumber(x) {
  return Number.isInteger(x);
}
function isStrictlyPositive(x) {
  return x > 0;
}
function isPositive(x) {
  return x >= 0;
}
function validateGivenCoordinates(x, y, rows, cols) {
  if (y >= cols || y < 0 || x >= rows || x < 0) return false;
  return true;
}

export {
  isNumber,
  isWholeNumber,
  isStrictlyPositive,
  isPositive,
  validateGivenCoordinates,
};
