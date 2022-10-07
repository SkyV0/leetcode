// 79. Word Search
// Medium
// 11.1K
// 424
// Companies
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 

// Follow up: Could you use search pruning to make your solution faster with a larger board?
function exist(board: string[][], word: string): boolean {
    let m = board.length;
    let n = board[0].length;
    let backtrack = (i, j, k) => {
        if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) return false;
        if(k === word.length - 1) return true;
        board[i][j] = '';
        let res = backtrack(i+1, j, k+1) || backtrack(i-1, j, k+1) || backtrack(i, j+1, k+1) || backtrack(i, j-1, k+1);
        board[i][j] = word[k];
        return res;
    }
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(backtrack(i, j, 0)) return true;
        }
    }
    return false;
};