/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    const freqMap = {};
    let count = 0;
    for (const [a, b] of dominoes) {
        let key = a < b ? `${a},${b}` : `${b},${a}`
        freqMap[key] = (freqMap[key] || 0) + 1;
    }

    for (let val of Object.values(freqMap)) {
        count += val * (val - 1) / 2
    }

    return count
};