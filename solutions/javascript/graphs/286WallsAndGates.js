/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
    const rows = rooms.length;
    const cols = rooms[0].length;
    const visited = new Set();
    const q = [];

    const addCells = (r, c) => {
        if (r < 0 || c < 0 || r === rows || c === cols ||
            visited.has(r + ',' + c) || rooms[r][c] === -1) {
            return;
        }

        visited.add(r + ',' + c);
        q.push([r, c]);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (rooms[r][c] === 0) {
                visited.add(r + ',' + c);
                q.push([r, c]);
            }
        }
    }

    let dist = 0;
    while (q.length > 0) {
        for (let i = q.length; i > 0; i--) {
            let [r, c] = q.shift();
            rooms[r][c] = dist;
            addCells(r + 1, c);
            addCells(r - 1, c);
            addCells(r, c + 1);
            addCells(r, c - 1);
        }
        dist += 1;
    }
};