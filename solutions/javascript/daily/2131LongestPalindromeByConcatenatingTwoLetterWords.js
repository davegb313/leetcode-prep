/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    const freq = {};
    for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }

    let res = 0;
    let hasCenter = false;

    for (let word in freq) {
        const rev = word[1] + word[0];
        const count = freq[word];

        if (word === rev) {
            res += Math.floor(count / 2) * 4;
            if (count % 2 === 1) hasCenter = true;
        } else if (freq[rev]) {
            const pairs = Math.min(count, freq[rev]);
            res += pairs * 4;
            freq[rev] = 0;
        }

        freq[word] = 0;
    }

    if (hasCenter) res += 2;
    return res;
};