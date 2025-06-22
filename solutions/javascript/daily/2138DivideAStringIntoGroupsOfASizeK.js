/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    let res = [];

    while (s.length >= k) {
        console.log(s.slice(0, k))
        res.push(s.slice(0, k))
        s = s.slice(k)
    }
    if (s.length > 0) {
        while (s.length < k) {
            s += fill
        }
        res.push(s)
    }

    return res
};