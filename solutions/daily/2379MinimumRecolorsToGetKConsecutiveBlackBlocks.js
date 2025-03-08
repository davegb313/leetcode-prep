/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let l = 0;
    let recolor = 0;
    let res = k;
    for (let r = 0; r < blocks.length; r++) {
        if (blocks[r] == 'W') {
            recolor++;
        }
        if (r - l + 1 == k) {
            res = Math.min(res, recolor);
            if (blocks[l] == 'W') {
                recolor--
            }
            l++
        }
    }
    return res
}