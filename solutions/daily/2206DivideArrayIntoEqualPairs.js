/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let numMap = {}

    for (let i = 0; i < nums.length; i++) {
        numMap[nums[i]] = (numMap[nums[i]] || 0) + 1;
    }

    for (const num of Object.values(numMap)) {
        if (num % 2 !== 0) {
            return false
        }
    }
    return true
};