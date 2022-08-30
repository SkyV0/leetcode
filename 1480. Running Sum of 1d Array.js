/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    //Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    //Return the running sum of nums.
    //1 <= nums.length <= 1000
    //-10^6 <= nums[i] <= 10^6
    
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        nums[i] = sum;
    }
    return nums;
};