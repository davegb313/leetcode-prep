/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */

var isZeroArr = function (nums, queries, mid) {
    const diff = new Array(nums.length + 1).fill(0);
    let temp = [...nums];
    for (let j = 0; j < mid; j++) {
        diff[queries[j][0]] -= queries[j][2];
        diff[queries[j][1] + 1] += queries[j][2];
    }

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        count += diff[i]
        temp[i] += count;
        if (temp[i] > 0) {
            return false
        }
    }

    return true
}

var minZeroArray = function (nums, queries) {
    let l = 0, r = queries.length, ans = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (isZeroArr(nums, queries, mid)) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
};