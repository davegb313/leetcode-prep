/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let l = 0;
    let r = 2;
    let count = 0;
    while (r < nums.length) {
        if (nums[l] == 0) {
            nums[l] = 1;
            nums[l + 1] == 0 ? nums[l + 1] = 1 : nums[l + 1] = 0;
            nums[l + 2] == 0 ? nums[l + 2] = 1 : nums[l + 2] = 0;
            count++
        }
        l++
        r++
    }

    return nums.includes(0) ? -1 : count
};