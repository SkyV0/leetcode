// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
function sortedSquares(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1;
    const result = [];
    while (left <= right) {
        const leftSquare = nums[left] ** 2;
        const rightSquare = nums[right] ** 2;
        if (leftSquare > rightSquare) {
            result.unshift(leftSquare);
            left++;
        } else {
            result.unshift(rightSquare);
            right--;
        }
    }
    return result;
};