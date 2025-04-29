/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let maxEl = Math.max(...nums);
    let maxCount = 0;
    let l = 0, res = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === maxEl) maxCount++;
        while (maxCount === k) {
            res += nums.length - r;
            if (nums[l] === maxEl) maxCount--;
            l++;
        }
    }
    return res;
};