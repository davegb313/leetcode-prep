/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function (nums, queries) {
    n = nums.length
    const arr = new Array(nums.length + 1).fill(0);
    queries.sort((a, b) => a[0] - b[0]);

    k = queries.length
    j = 0
    prefix = 0
    const hq = new MaxPriorityQueue();


    for (let i = 0, j = 0; i < n; i++) {
        prefix += arr[i]
        while (j < k && queries[j][0] == i) {
            hq.push(queries[j][1])
            j += 1
        }
        while (prefix < nums[i] && !hq.isEmpty() && hq.front() >= i) {
            prefix += 1
            arr[hq.pop() + 1] -= 1
        }
        if (prefix < nums[i]) {
            return -1
        }
    }

    return hq.size()
};