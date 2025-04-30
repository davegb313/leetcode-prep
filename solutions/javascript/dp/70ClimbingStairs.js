/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1
    if (n === 2) return 2
    let res = [0, 1];

    for (let i = 0; i < n; i++) {
        res.push(res[i + 1] + res[i])
    }
    return res[res.length - 1]
};