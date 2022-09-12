// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// mat[i][j] is either 0 or 1.
// There is at least one 0 in mat.
function updateMatrix(mat: number[][]): number[][] {
    const result = new Array(mat.length).fill(0).map(() => new Array(mat[0].length).fill(0));
    const queue = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
        if (mat[i][j] === 0) {
            queue.push([i, j]);
        } else {
            result[i][j] = Number.MAX_VALUE;
        }
        }
    }
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (queue.length) {
        const [i, j] = queue.shift();
        for (const [x, y] of directions) {
        const row = i + x;
        const col = j + y;
        if (row < 0 || row >= mat.length || col < 0 || col >= mat[0].length || result[row][col] <= result[i][j] + 1) {
            continue;
        }
        result[row][col] = result[i][j] + 1;
        queue.push([row, col]);
        }
    }
    return result;
};