/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let w1 = w2 = 0;
    let res = '';
    while (w1 < word1.length || w2 < word2.length) {
        res += word1[w1] ? word1[w1] : '';
        res += word2[w2] ? word2[w2] : '';

        w1++
        w2++
    }

    return res
};