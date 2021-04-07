/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} _s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const arr = s2.split('');
  // eslint-disable-next-line no-restricted-syntax
  for (const str of s1) {
    const index = arr.findIndex((s) => s === str);
    if (index >= 0) {
      count++;
      arr.splice(index, 1);
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
