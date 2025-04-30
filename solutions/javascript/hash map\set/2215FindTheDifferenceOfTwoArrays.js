/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let notInTwo = new Set(nums1);
    let notInOne = new Set(nums2);

    for (let num of nums2) {
        if (notInTwo.has(num)) {
            notInTwo.delete(num);
            notInOne.delete(num);
        }
    }

    return [Array.from(notInTwo), Array.from(notInOne)];
};