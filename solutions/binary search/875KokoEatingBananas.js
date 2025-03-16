/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let l = 0;
    let r = Math.max(...piles);
    let res = r;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let count = countAll(piles, mid)
        console.log(mid, count, r)
        if (count <= h) {
            res = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return res
};

var countAll = function (piles, hours) {
    let count = 0;

    for (const i of piles) {
        count += Math.ceil(i / hours)
    }

    return count
}