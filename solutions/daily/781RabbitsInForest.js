/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    let total = 0;
    ans = {};
    for (let i = 0; i < answers.length; i++) {
        ans[answers[i]] = (ans[answers[i]] || 0) + 1;
    }
    for (const k in ans) {
        const groupSize = +k + 1;
        const groups = Math.ceil(ans[k] / groupSize);
        total += groups * groupSize
    }

    return total
};