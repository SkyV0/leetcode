// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

function maxProduct(nums: number[]): number {
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        const tempMax = Math.max(num, num * max, num * min);
        min = Math.min(num, num * max, num * min);
        max = tempMax;
        result = Math.max(result, max);
    }
    return result;
};