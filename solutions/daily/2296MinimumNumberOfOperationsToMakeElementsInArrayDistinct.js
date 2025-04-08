/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let numSet = new Set();
    let res = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (numSet.has(nums[i])) {
            return Math.ceil((i + 1) / 3);
        }
        numSet.add(nums[i]);
    }

    return res;
};