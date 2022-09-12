// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.
// m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], color < 216
// 0 <= sr < m
// 0 <= sc < n
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const startColor = image[sr][sc];
    if (startColor === color) {
        return image;
    }
    const dfs = (i: number, j: number) => {
        if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] !== startColor) {
            return;
        }
        image[i][j] = color;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };
    dfs(sr, sc);
    return image;
};