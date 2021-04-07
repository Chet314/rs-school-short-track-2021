/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a index in it that indicates the total index of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The matrix2should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrix2 = [];
  for (let i = 0; i < matrix.length; i++) {
    const array = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let index = 0;
      if (matrix[i - 1] && matrix[i - 1][j + 1]) {
        index++;
      }
      if (matrix[i - 1] && matrix[i - 1][j]) {
        index++;
      }
      if (matrix[i - 1] && matrix[i - 1][j - 1]) {
        index++;
      }
      if (matrix[i][j + 1]) {
        index++;
      }
      if (matrix[i][j - 1]) {
        index++;
      }
      if (matrix[i + 1] && matrix[i + 1][j + 1]) {
        index++;
      }
      if (matrix[i + 1] && matrix[i + 1][j]) {
        index++;
      }
      if (matrix[i + 1] && matrix[i + 1][j - 1]) {
        index++;
      }
      array.push(index);
    }
    matrix2.push(array);
  }
  return matrix2;
}

module.exports = minesweeper;
