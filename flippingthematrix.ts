
/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix: number[][]): number {
    // Write your code here
//the first line of each query contains an integer, n, denoting the size of the matrix.
//Each of the n lines contains 2n contains 2n space-separated integers matrix[i][j] in row i of the matrix.
//1 is less then or equal to q and q is less than or equal to 16.
//1 is less then of equal to n and and less then or equal to 128.
//0 is less then or equal to matrix[i][j] and matrix[i][j] is less then or equal to 4096, where 0 is less then or equal to i,j is less then or equal to 2n.
    let flipped: number = 0;
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                flipped++;
            }
        }
    }
    return flipped;
//accepted above
}