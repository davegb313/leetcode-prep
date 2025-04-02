/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let temp = nums[0];

    for (let i = 1; i < nums.length; i++) {
        temp = Math.max(nums[i], temp + nums[i])
        maxSum = Math.max(maxSum, temp)
    }
    return maxSum
};