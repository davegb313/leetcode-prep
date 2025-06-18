/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length; i += 3) {
        const group = [nums[i], nums[i + 1], nums[i + 2]];
        if (group[2] - group[0] > k) return [];
        res.push(group);
    }
    return res;
};