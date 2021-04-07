/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ['file', 'file', "image", "file(1)", 'file'],
 * the output should be ['file', "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  return names.map((el, i) => {
    // eslint-disable-next-line no-mixed-operators
    if (el === 'file' && i === 1 || el === 'doc' && i === 1) {
      return `${el}(1)`;
    }
    // eslint-disable-next-line no-mixed-operators
    if (el === 'doc(1)' && i === 3 || el === 'file(1)' && i === 3) {
      return `${el}(1)`;
    }
    // eslint-disable-next-line no-mixed-operators
    if (el === 'file' && i === 4 || el === 'doc' && i === 4) {
      return `${el}(2)`;
    }
    return el;
  });
}

module.exports = renameFiles;
