/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function (word, numFriends) {
    let res = '';

    if (numFriends === 1) return word;
    const n = word.length;

    for (let i = 0; i < n; i++) {
        let str = word.substring(i, Math.min(i + n - numFriends + 1, n))
        if (str > res) {
            res = str
        }
    }

    return res;
};