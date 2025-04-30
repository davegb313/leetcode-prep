/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
    let charFreq = {}

    for (let i = 0; i < s.length; i++) {
        charFreq[s[i]] = (charFreq[s[i]] || 0) + 1;
    }
    let countToOne = 0;
    for (let j = 0; j < Object.values(charFreq).length; j++) {
        if (Object.values(charFreq)[j] % 2 != 0) {
            if (countToOne < 1) {
                countToOne++
                continue
            }
            return false
        }
    }
    return true
};