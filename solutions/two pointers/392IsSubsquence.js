/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let l = 0;
    let r = 0;
    while (r < t.length) {
        if (t[r] === s[l]) {
            l++
        }
        r++
    }

    return l == s.length;
};