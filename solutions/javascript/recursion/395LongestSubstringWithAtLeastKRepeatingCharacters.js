/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    let count = new Map();
    for (let i = 0; i < s.length; i++) {
        count.set(s[i], (count.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (count.get(s[i]) < k) {
            return Math.max(
                longestSubstring(s.slice(0, i), k),
                longestSubstring(s.slice(i + 1), k)
            )
        }
    }
    return s.length;
};