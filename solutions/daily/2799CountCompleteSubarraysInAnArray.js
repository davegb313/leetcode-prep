/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
    const totalDistinct = new Set(nums).size;
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
        const seen = new Set();
        for (let i = j; i < nums.length; i++) {
            seen.add(nums[i]);
            if (seen.size === totalDistinct) {
                count += nums.length - i;
                break;
            }
        }
    }

    return count;
};