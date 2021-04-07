/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let index = 0;
  const arr2 = arr.filter((el) => el !== -1).sort((a, b) => a - b);
  const arr3 = arr.map((el, i) => {
    if (el === -1) {
      index++;
      return el;
    } return arr2[i - index];
  });
  return arr3;
}

module.exports = sortByHeight;
