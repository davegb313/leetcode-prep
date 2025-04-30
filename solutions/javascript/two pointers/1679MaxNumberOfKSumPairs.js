/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    nums.sort((a, b) => a - b);
    let l = 0;
    let r = nums.length - 1;
    let res = 0;

    while (l < r) {
        const sum = nums[l] + nums[r];

        if (sum === k) {
            res++;
            l++;
            r--;
        } else if (sum < k) {
            l++;
        } else {
            r--;
        }
    }
    return res
}