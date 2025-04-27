/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
    let l = 0, r = 2;
    let count = 0;

    while (r < nums.length) {
        if (nums[l] + nums[r] === nums[r - 1] / 2) {
            count++;
        }
        l++;
        r++;
    }

    return count;
};