/**
 * @param {number} num
 * @return {number}
 */
const maxDiff = (num, s = String(num)) => {
    const maxDigit = s[s.search(/[^9]/)] ?? -1;
    const max = maxDigit + 1 ? +s.replace(new RegExp(maxDigit, 'g'), '9') : num;

    let min;
    if (s[0] !== '1') {
        min = +s.replace(new RegExp(s[0], 'g'), '1');
    } else {
        const minDigit = s[s.search(/[2-9]/)] ?? -1;
        min = minDigit + 1 ? +s.replace(new RegExp(minDigit, 'g'), '0') : num;
    }

    return max - min;
};