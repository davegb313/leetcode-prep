/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const rows = grid.length, cols = grid[0].length;
    let area = 0;

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) return 0;
        let tempArea = 1;
        grid[r][c] = 0;
        for (let [dr, dc] of directions) {
            tempArea += dfs(r + dr, c + dc)
        }
        return tempArea
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                area = Math.max(area, dfs(r, c));
            }
        }
    }
    return area
};