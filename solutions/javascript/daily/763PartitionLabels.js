/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let lastIdxMap = {}

    for (let i = 0; i < s.length; i++) {
        lastIdxMap[s[i]] = i;
    }
    let res = []
    let len = 0
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        len++
        end = Math.max(lastIdxMap[s[i]], end)

        if (i === end) {
            res.push(len)
            len = 0;
        }
    }
    return res
};