/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let totalSum = 0;
    for (const num of nums) {
        totalSum += num;
    }
    if (totalSum % 2 !== 0) return false;

    let subsetSum = totalSum / 2;
    let dp = new Set();
    dp.add(0);

    for (let i = nums.length - 1; i >= 0; i--) {
        nextDp = new Set();
        for (t of dp) {
            nextDp.add(t + nums[i]);
            nextDp.add(t);
        }
        console.log(nextDp);
        dp = nextDp;
    }
    return dp.has(subsetSum);
};