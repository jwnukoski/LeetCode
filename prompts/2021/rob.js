/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(num) {
    let prevMax = 0;
    let currMax = 0;
    for (const x of num) {
        let temp = currMax;
        currMax = Math.max(prevMax + x, currMax);
        prevMax = temp;
    }
    return currMax;
};

// Runtime: 80 ms, faster than 55.67% of JavaScript online submissions for House Robber.
// Memory Usage: 38.5 MB, less than 43.01% of JavaScript online submissions for House Robber.

/*You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.*/