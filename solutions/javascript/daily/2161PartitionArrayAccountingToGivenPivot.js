/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let leftSide = [];
    let rightSide = [];
    let middleArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            leftSide.push(nums[i])
        } else if (nums[i] > pivot) {
            rightSide.push(nums[i])
        } else {
            middleArr.push(nums[i])
        }
    }

    return [...leftSide, ...middleArr, ...rightSide]
};