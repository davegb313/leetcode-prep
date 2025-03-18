/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    let count = 1;
    let l = 0;
    let sum = 0;
    let tempCount = 1;
    for (let r = 0; r < nums.length; r++) {
        while ((sum & nums[r]) !== 0) {
            sum ^= nums[l]
            l++
        }
        sum |= nums[r]
        count = Math.max(count, r - l + 1)
    }

    return count
};