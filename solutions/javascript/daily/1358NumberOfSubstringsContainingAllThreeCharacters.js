/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let l = 0;
    let out = 0;
    let set = { 'a': 0, 'b': 0, 'c': 0 }
    for (let r = 0; r < s.length; r++) {
        set[s[r]]++
        while (set['a'] > 0 && set['b'] > 0 && set['c'] > 0) {
            out += s.length - r
            set[s[l]]--
            l++
        }
    }


    return out;
};