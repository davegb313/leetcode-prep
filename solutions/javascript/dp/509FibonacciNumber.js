/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0
    if (n < 3) return 1
    let res = [0, 1];

    for (let i = 0; i < n - 1; i++) {
        res.push(res[i + 1] + res[i])
    }
    return res[res.length - 1]
};