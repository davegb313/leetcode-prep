/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
    let splits = []
    for (let i = 0; i < weights.length - 1; i++) {
        splits.push(weights[i] + weights[i + 1])
    }

    splits.sort((a, b) => a - b);
    let minSplit = 0;
    for (let i = 0; i < k - 1; i++) {
        minSplit += splits[i]
    }

    splits.sort((a, b) => b - a);
    let maxSplit = 0;
    for (let i = 0; i < k - 1; i++) {
        maxSplit += splits[i]
    }

    return maxSplit - minSplit
};