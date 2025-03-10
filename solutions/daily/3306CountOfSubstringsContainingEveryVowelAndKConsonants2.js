/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {

    function atleastK(k) {
        const vowels = new Map([['a', 0], ['e', 0], ['i', 0], ['o', 0], ['u', 0]]);
        let nonVowel = 0;
        let res = 0;
        let l = 0;

        for (let r = 0; r < word.length; r++) {
            const itemR = vowels.get(word[r]);
            itemR !== undefined ? vowels.set(word[r], itemR + 1) : nonVowel += 1;

            while (Array.from(vowels.values()).every((c) => c > 0) && nonVowel >= k) {
                res += word.length - r;
                const itemL = vowels.get(word[l]);
                itemL !== undefined ? vowels.set(word[l], itemL - 1) : nonVowel--;

                l++
            }
        }
        return res
    }
    let res = atleastK(k) - atleastK(k + 1);

    return res;
};