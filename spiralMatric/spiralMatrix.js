/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    //Given an m x n matrix, return all elements of the matrix in spiral order.
    //m == matrix.length
//n == matrix[i].length
//1 <= m, n <= 10
//-100 <= matrix[i][j] <= 100
    let result = [];        
    let row = matrix.length;
    let col = matrix[0].length;
    let i = 0;
    let j = 0;
    while (i < row && j < col) {
        for (let k = j; k < col; k++) {
            result.push(matrix[i][k]);
        }
        i++;
        for (let k = i; k < row; k++) {
            result.push(matrix[k][col - 1]);
        }
        col--;
        if (i < row) {
            for (let k = col - 1; k >= j; k--) {
                result.push(matrix[row - 1][k]);
            }
            row--;
        }
        if (j < col) {
            for (let k = row - 1; k >= i; k--) {
                result.push(matrix[k][j]);
            }
            j++;
        }
    }
    return result;
};