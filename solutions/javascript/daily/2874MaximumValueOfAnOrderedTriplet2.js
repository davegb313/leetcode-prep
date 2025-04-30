/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let max = 0;
    let maxDiff = 0;
    let maxTriplet = 0;

    for (let k = 0; k < nums.length; k++) {
        maxTriplet = Math.max(maxTriplet, maxDiff * nums[k])
        if (max < nums[k]) {
            max = nums[k]
            continue
        }
        maxDiff = Math.max(maxDiff, max - nums[k])
    }
    return maxTriplet >= 0 ? maxTriplet : -1;
};