/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let n = intervals.length;
    let res = [];
    let i = 0;

    while (i < n && newInterval[0] > intervals[i][1]) {
        res.push(intervals[i]);
        i++
    }

    while (i < n && newInterval[1] >= intervals[i][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    res.push(newInterval);

    while (i < n) {
        res.push(intervals[i]);
        i++
    }

    return res;
};