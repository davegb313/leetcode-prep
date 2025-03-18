/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let l = 0;
    let r = 0;
    let k = 1;
    while (r < nums.length) {
        if (nums[r] === 0) {
            k--
        }
        r++

        if (k < 0) {
            if (nums[l] === 0) {
                k++
            }
            l++
        }
    }
    return r - l - 1;
};