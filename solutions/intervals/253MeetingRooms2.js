/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    const start = intervals.map(i => i[0]).sort((a, b) => a - b);
    const end = intervals.map(i => i[1]).sort((a, b) => a - b);

    let res = 0, count = 0;
    let s = 0, e = 0;

    while (s < intervals.length) {
        if (start[s] < end[e]) {
            s++
            count++
        } else {
            e++
            count--
        }
        res = Math.max(res, count);
    }
    return res;
};