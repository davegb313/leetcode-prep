/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let res = nums[0];
    let curMax = 1;
    let curMin = 1;

    for (const num of nums) {
        let temp = curMax * num;
        curMax = Math.max(num, curMax * num, curMin * num);
        curMin = Math.min(num, temp, curMin * num);
        res = Math.max(curMax, res)
    }

    return res
};