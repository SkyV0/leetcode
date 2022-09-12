// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.
function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const path: number[] = [];
    const backtrack = (start: number) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (path.includes(nums[i])) {
                continue;
            }
            path.push(nums[i]);
            backtrack(i + 1);
            path.pop();
        }
    }
    backtrack(0);
    return result;
};