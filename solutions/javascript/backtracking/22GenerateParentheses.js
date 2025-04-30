/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = []
    backtrack(0, 0, n, res, '')
    return res
};

function backtrack(closeN, openN, n, res, stack) {
    if (closeN === openN && closeN === n) {
        res.push(stack);
        return;
    }

    if (openN < n) {
        backtrack(closeN, openN + 1, n, res, stack + '(')
    }

    if (closeN < openN) {
        backtrack(closeN + 1, openN, n, res, stack + ')')
    }
}