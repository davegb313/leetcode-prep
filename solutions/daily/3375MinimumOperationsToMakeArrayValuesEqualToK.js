/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let numSet = new Set()
    for (const num of nums) {
        if (num < k) {
            return -1
        } else if (num > k) {
            numSet.add(num)
        }
    }

    return numSet.size;
};