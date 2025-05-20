/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {

    const diff = new Array(nums.length + 1).fill(0);

    for (let j = 0; j < queries.length; j++) {
        diff[queries[j][0]] += 1;
        diff[queries[j][1] + 1] += -1;
    }


    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        count += diff[i]
        if (nums[i] - count > 0) {
            return false
        }
    }

    return true
};