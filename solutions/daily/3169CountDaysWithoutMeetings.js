/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
function countDays(days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);
    let merged = [];

    for (let [start, end] of meetings) {
        if (!merged.length || start > merged[merged.length - 1][1]) {
            merged.push([start, end]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
        }
    }

    let count = merged[0][0] - 1;
    for (let i = 1; i < merged.length; i++) {
        count += merged[i][0] - merged[i - 1][1] - 1;
    }

    count += days - merged[merged.length - 1][1];
    return count;
}