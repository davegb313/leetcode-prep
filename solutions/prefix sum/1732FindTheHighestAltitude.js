/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let alt = 0;
    let temp = 0;

    for (const a in gain) {
        temp += gain[a]
        alt = Math.max(alt, temp)
    }

    return alt
};