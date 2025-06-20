/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let j = nums[0];
    let maxDiff = -1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > j) {
            maxDiff = Math.max(maxDiff, nums[i] - j)
        } else {
            j = nums[i]
        }
    }
    return maxDiff
};