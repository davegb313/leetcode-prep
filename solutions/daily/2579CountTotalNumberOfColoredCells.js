/**
 * @param {number} n
 * @return {number}
 */

// two solutions first one is basic for loop
// and second one more fancy O(1)

var coloredCells = function (n) {
    let res = 1;
    for (let i = 0; i < n; i++) {
        res = res + (i * 4)
    }
    return res
};

var coloredCells = function (n) {
    return 2 * n * n - 2 * n + 1;
};