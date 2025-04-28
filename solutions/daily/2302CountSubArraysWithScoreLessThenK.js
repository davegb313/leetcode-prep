/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let count = 0, n = nums.length;
    let l = 0;

    let sum = 0;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r]
        while (sum * (r - l + 1) >= k) {
            sum -= nums[l];
            l++
        }
        count += r - l + 1
    }

    return count;
};