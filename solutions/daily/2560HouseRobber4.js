/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
    let l = Math.min(...nums);
    let r = Math.max(...nums);
    let res = 0;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (isValid(m, nums, k)) {
            res = m
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return res
};

var isValid = function (cap, nums, k) {
    let i = 0;
    let count = 0;

    while (i < nums.length) {
        if (nums[i] <= cap) {
            i += 2;
            count += 1;
        } else {
            i += 1
        }
        if (count === k) {
            break
        }
    }
    return count === k
}