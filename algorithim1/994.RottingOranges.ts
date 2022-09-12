// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.
function orangesRotting(grid: number[][]): number {
    const queue = [];
    let fresh = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }
    let minutes = 0;
    while (queue.length && fresh) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();
            if (x > 0 && grid[x - 1][y] === 1) {
                grid[x - 1][y] = 2;
                fresh--;
                queue.push([x - 1, y]);
            }
            if (x < grid.length - 1 && grid[x + 1][y] === 1) {
                grid[x + 1][y] = 2;
                fresh--;
                queue.push([x + 1, y]);
            }
            if (y > 0 && grid[x][y - 1] === 1) {
                grid[x][y - 1] = 2;
                fresh--;
                queue.push([x, y - 1]);
            }
            if (y < grid[0].length - 1 && grid[x][y + 1] === 1) {
                grid[x][y + 1] = 2;
                fresh--;
                queue.push([x, y + 1]);
            }
        }
        minutes++;
    }
    return fresh ? -1 : minutes;
};