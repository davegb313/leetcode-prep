/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
    const MOD = 1000000007;
    let count = Array(26).fill(0);

    for (let char of s) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let j = 0; j < t; j++) {
        let temp = Array(26).fill(0);
        for (let i = 0; i < 26; i++) {
            if (i === 25) {
                temp[0] = (temp[0] + count[i]) % MOD;
                temp[1] = (temp[1] + count[i]) % MOD;
            } else {
                temp[i + 1] = (temp[i + 1] + count[i]) % MOD
            }
        }

        count = temp
    }
    return count.reduce((sum, val) => (sum + val) % MOD, 0);
};