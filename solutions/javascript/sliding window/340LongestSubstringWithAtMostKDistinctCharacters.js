/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
    let count = new Map();
    let l = 0;
    let res = 0;
    for (let r = 0; r < s.length; r++) {
        count.set(s[r], r);
        if (count.size === k + 1) {
            let minIndex = Math.min(...count.values());
            count.delete(s[minIndex])
            l = minIndex + 1;
        }
        res = Math.max(res, r - l + 1);
    }
    return res
};