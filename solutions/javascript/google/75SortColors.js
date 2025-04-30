/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let count = {};

    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (count['0'] > 0) {
            nums[i] = 0
            count['0']--
            continue
        }
        if (count['1'] > 0) {
            nums[i] = 1
            count['1']--
            continue
        }
        if (count['2'] > 0) {
            nums[i] = 2
            count['2']--
            continue
        }
    }
};