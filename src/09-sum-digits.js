/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const number = String(n).split('').reduce((sum, el) => sum + Number(el), 0);
  return number >= 0 && number <= 9 ? number : getSumOfDigits(number);
}

module.exports = getSumOfDigits;
