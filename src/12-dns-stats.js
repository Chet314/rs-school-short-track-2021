/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    domains[i]
      .split('.')
      .reverse()
      // eslint-disable-next-line array-callback-return
      // eslint-disable-next-line consistent-return
      .reduce((p, c) => {
        const key = `${p}.${c}`;
        if (key in obj) {
          obj[key] += 1;
        } else {
          obj[key] = 1;
        }
        return key;
      }, '');
  }
  return obj;
}

module.exports = getDNSStats;
