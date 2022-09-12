// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.
function maxAreaOfIsland(grid: number[][]): number {
    let result = 0;
    const dfs = (i: number, j: number) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== 1) {
            return 0;
        }
        grid[i][j] = 0;
        return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
    };
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                result = Math.max(result, dfs(i, j));
            }
        }
    }
    return result;
};