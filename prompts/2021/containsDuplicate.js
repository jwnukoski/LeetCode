// Prompt URL: https://leetcode.com/problems/contains-duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const counts = {}
    
    for (const num of nums) {
        if (counts[num] === undefined) {
            counts[num] = true
        } else {
            return true
        }
    }
    
    return false
};

// Runtime: 68 ms, faster than 99.93% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 47.2 MB, less than 15.07% of JavaScript online submissions for Contains Duplicate.