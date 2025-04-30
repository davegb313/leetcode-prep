/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
    let expArr = [...colors, ...colors.slice(0, k - 1)];
    let count = 0;
    let r = 1;
    let l = 0;
    while (r < expArr.length) {
        if (expArr[r] === expArr[r - 1]) {
            l = r
            r++
            continue;
        }
        r++
        if (r - l < k) {
            continue;
        }

        count++
        l++
    }
    return count
};