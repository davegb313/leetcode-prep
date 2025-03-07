/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let top = 0;
    let bot = rows - 1;

    while (top <= bot) {
        let mid = Math.floor((bot + top) / 2);
        if (target > matrix[mid][cols - 1]) {
            top = mid + 1;
        } else if (target < matrix[mid][0]) {
            bot = mid - 1
        } else {
            break;
        }
    }


    if (!(top <= bot)) {
        return false
    }
    let row = Math.floor((bot + top) / 2);

    let l = 0;
    let r = cols - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (target > matrix[row][mid]) {
            l = mid + 1;
        } else if (target < matrix[row][mid]) {
            r = mid - 1
        } else {
            return true
        }
    }

    return false
};