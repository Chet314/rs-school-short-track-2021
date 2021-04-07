/* eslint-disable consistent-return */
/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let index = 1;
  // eslint-disable-next-line consistent-return
  // eslint-disable-next-line array-callback-return
  return str.split('').map((el, i, arr) => {
    if (el === arr[i + 1]) {
      index++;
    } else {
      const result = index === 1 ? `${el}` : `${index}${el}`;
      index = 1;
      return result;
    }
  }).filter((el) => el !== undefined).join('');
}

module.exports = encodeLine;
