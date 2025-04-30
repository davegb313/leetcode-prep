/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
    let res = 0;
    let l = 0;
    let r = ranks[0] * cars * cars;

    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const repaired = totalCarsByTime(ranks, m)
        if (repaired >= cars) {
            res = m
            r = m - 1
        } else {
            l = m + 1
        }
    }

    return res;
};


var totalCarsByTime = function (ranks, mid, cars) {
    let total = 0;
    for (let i = 0; i < ranks.length; i++) {
        total += Math.floor(Math.sqrt(mid / ranks[i]))
    }
    return total
}