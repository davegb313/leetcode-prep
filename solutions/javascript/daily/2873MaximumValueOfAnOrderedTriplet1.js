/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let maxEl = 0;
    let max = 0;
    let maxTriplet = 0;

    for (let j = 0; j < nums.length; j++) {
        if (max <= nums[j]) {
            max = nums[j];
            continue
        }
        for (let k = j + 1; k < nums.length; k++) {
            maxTriplet = Math.max(maxTriplet, (max - nums[j]) * nums[k])
        }
    }
    return maxTriplet >= 0 ? maxTriplet : 0;
};