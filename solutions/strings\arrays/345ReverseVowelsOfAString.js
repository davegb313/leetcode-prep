/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let word = s.split('')
    let vowels = 'aeiouAEIOU';
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (vowels.includes(word[l]) && vowels.includes(word[r])) {
            let temp = word[r]
            word[r] = word[l]
            word[l] = temp
            l++
            r--

        } else if (!vowels.includes(word[r])) {
            r--
        } else {
            l++
        }
    }

    return word.join('')
};