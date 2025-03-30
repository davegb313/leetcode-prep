/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let start = 0;
    let len = 0;
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;

        while (s[l] === s[r] && l >= 0 && r < s.length) {

            if (r - l + 1 > len) {
                start = l;
                len = r - l + 1;
            }
            res++
            l--;
            r++
        }

        l = i - 1;
        r = i;

        while (s[l] === s[r] && l >= 0 && r < s.length) {

            if (r - l + 1 > len) {
                start = l;
                len = r - l + 1;
            }
            res++
            l--;
            r++
        }
    }

    return res;
};