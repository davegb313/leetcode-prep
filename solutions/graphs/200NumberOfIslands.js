/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const rows = grid.length, cols = grid[0].length;
    let islands = 0;

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') return

        grid[r][c] = '0';
        for (let [dr, dc] of directions) {
            dfs(r + dr, c + dc)
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                dfs(r, c);
                islands++
            }
        }
    }
    return islands
};