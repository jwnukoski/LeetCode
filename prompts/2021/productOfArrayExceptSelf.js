// Prompt URL: https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
const productExceptSelf = (nums) => {
  const products = []

  const left = [1]
  for (let i = 1; i < nums.length; i++) {
    left.push(nums[i - 1] * left[i - 1])
  }

  const right = []
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      right[i] = 1
      continue
    }

    right[i] = right[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < nums.length; i++) {
    products[i] = left[i] * right[i]
  }

  return products
}

// Input:  [1,2,3,4]
// Output: [24,12,8,6]

// Runtime: 120 ms, faster than 70.21% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 49.9 MB, less than 46.92% of JavaScript online submissions for Product of Array Except Self.