// Constraints:

// m == heights.length
// n == heights[r].length
// 1 <= m, n <= 200
// 0 <= heights[r][c] <= 105
function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0].length;
    const pacific = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const atlantic = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const queue = [];
    for (let i = 0; i < m; i++) {
        pacific[i][0] = true;
        queue.push([i, 0]);
        atlantic[i][n - 1] = true;
        queue.push([i, n - 1]);
    }
    for (let i = 0; i < n; i++) {
        pacific[0][i] = true;
        queue.push([0, i]);
        atlantic[m - 1][i] = true;
        queue.push([m - 1, i]);
    }
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (queue.length) {
        const [x, y] = queue.shift();
        for (let dir of dirs) {
            const [dx, dy] = dir;
            const nx = x + dx;
            const ny = y + dy;
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
                continue;
            }
            if (heights[nx][ny] < heights[x][y]) {
                continue;
            }
            if (pacific[x][y] && !pacific[nx][ny]) {
                pacific[nx][ny] = true;
                queue.push([nx, ny]);
            }
            if (atlantic[x][y] && !atlantic[nx][ny]) {
                atlantic[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }
    return result;
};