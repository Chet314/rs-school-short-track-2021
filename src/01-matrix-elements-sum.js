/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const array = [...matrix];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 && matrix[i + 1][j] !== 0) {
        array[i + 1][j] = 'z';
      }
    }
  }
  return array.reduce((sum, el) => sum + el.reduce((sum2, el2) => (typeof el2 !== 'number' ? sum2 + 0 : sum2 + el2), 0), 0);
}

module.exports = getMatrixElementsSum;
