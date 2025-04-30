/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    let l = 0;
    let r = 0;
    let map = new Map();
    let max = 0;
    while (r < s.length) {
        map.set(s[r], r)
        if (map.size === 3) {
            let minIndex = Math.min(...map.values());
            map.delete(s[minIndex]);
            l = minIndex + 1;
        }
        max = Math.max(max, r - l + 1);
        r++
    }
    return max
};