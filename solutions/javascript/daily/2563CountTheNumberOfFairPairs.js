/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    nums.sort((a, b) => a - b);

    function find(mn) {
        let n = nums.length;
        let l = 0;
        let r = n - 1;
        let res = 0;

        while (l < r) {
            if (nums[l] + nums[r] <= mn) {
                res = res + r - l;
                l++
            } else {
                r--
            }
        }

        return res
    }

    return find(upper) - find(lower - 1);
};