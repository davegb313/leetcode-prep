/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let pre = new Array(nums.length);
    let suf = new Array(nums.length);
    let res = new Array(nums.length);

    pre[0] = 1;
    suf[nums.length - 1] = 1;

    for (let i = 1; i < nums.length; i++) {
        pre[i] = nums[i - 1] * pre[i - 1]
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        suf[i] = nums[i + 1] * suf[i + 1]
    }
    for (let i = 0; i < nums.length; i++) {
        res[i] = pre[i] * suf[i]
    }

    return res;
};