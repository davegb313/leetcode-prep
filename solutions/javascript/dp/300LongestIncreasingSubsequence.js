/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let lis = new Array(nums.length).fill(1);

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
        }
    }
    return Math.max(...lis)
};