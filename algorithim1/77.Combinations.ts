// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.
// Constraints:

// 1 <= n <= 20
// 1 <= k <= n
function combine(n: number, k: number): number[][] {
    const result: number[][] = [];
    const path: number[] = [];
    const backtrack = (start: number) => {
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1);
            path.pop();
        }
    }
    backtrack(1);
    return result;
};