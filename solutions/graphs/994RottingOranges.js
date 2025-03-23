/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let fresh = 0;
    let time = 0;
    const q = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                fresh++
            }
            if (grid[r][c] === 2) {
                q.push([r, c]);
            }
        }
    }

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (q.length > 0 && fresh > 0) {
        const l = q.length;
        for (let i = 0; i < l; i++) {
            const [r, c] = q.shift();

            for (const [dr, dc] of directions) {
                const tempR = r + dr;
                const tempC = c + dc;
                if (tempR >= 0 && tempC >= 0 && tempR < rows &&
                    tempC < cols && grid[tempR][tempC] === 1) {
                    grid[tempR][tempC] = 2;
                    q.push([tempR, tempC]);
                    fresh--
                }
            }
        }
        time++
    }
    return fresh === 0 ? time : -1;
};