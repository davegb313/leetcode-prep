/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) {
        return [];
    }

    const combinations = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let res = [];

    const backtrack = (i, currStr) => {
        if (currStr.length === digits.length) {
            res.push(currStr);
            return;
        }
        for (const c of combinations[digits[i]]) {
            backtrack(i + 1, currStr + c);
        }
    }
    backtrack(0, '');
    return res;
}