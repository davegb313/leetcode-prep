/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let arrMax = Math.max(...candies);
    const res = []
    for (let i = 0; i < candies.length; i++) {
        console.log(candies[i] + extraCandies)
        if (candies[i] + extraCandies >= arrMax) {
            res.push(true)
        } else {
            res.push(false)
        }
    }

    return res;
};