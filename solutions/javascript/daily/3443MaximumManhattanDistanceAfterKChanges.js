/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (s, k) {
    let res = 0;
    let n = 0, south = 0, e = 0, w = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === 'N') n++;
        else if (c === 'S') south++;
        else if (c === 'E') e++;
        else if (c === 'W') w++;

        const x = Math.abs(n - south);
        const y = Math.abs(e - w);
        const md = x + y;
        const dis = md + Math.min(2 * k, i + 1 - md);
        res = Math.max(res, dis);
    }

    return res;
};