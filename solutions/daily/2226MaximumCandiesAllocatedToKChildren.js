/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
    let sum = 0;
    for (let i = 0; i < candies.length; i++) {
        sum += candies[i]
    }

    if (sum < k) return 0;

    let res = 1;
    let r = Math.floor(sum / k);
    let l = 0;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let count = 0;
        for (let i = 0; i < candies.length; i++) {
            if (candies[i] >= mid) {
                count += Math.floor(candies[i] / mid);
            }
        }

        if (count >= k) {
            res = mid;
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return res;
};