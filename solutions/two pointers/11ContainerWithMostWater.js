/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArea = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let res = 0;

    while (l < r) {
        if (nums[l] < nums[r]) {
            res = Math.max(res, nums[l] * (r - l))
            l++
        } else {
            res = Math.max(res, nums[r] * (r - l))
            r--
        }
    }
    return res;
};