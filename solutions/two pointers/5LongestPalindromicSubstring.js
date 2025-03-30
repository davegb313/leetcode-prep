/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s;
    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {
        let l = i, r = i;
        while (s[l] === s[r] && l >= 0 && r < s.length) {
            if (r - l + 1 > end) {
                start = l
                end = r - l + 1
            }
            l--;
            r++;
        }

        l = i - 1, r = i;
        while (s[l] === s[r] && l >= 0 && r < s.length) {
            if (r - l + 1 > end) {
                start = l
                end = r - l + 1
            }
            l--;
            r++;
        }
    }
    return s.substring(start, start + end)
}