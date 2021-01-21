// Prompt URL: https://leetcode.com/problems/reverse-integer
/* eslint-disable no-unused-vars */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (num) => {
  let result = String(num).split('')
  let isNegative = false

  if (result[0] === '-') {
    result.shift()
    isNegative = true
  }

  result = Number(result.reverse().join(''))

  if (result >= 2147483647) {
    // Constraints: -2^31 <= x <= 2^31 - 1
    return 0
  } else if (isNegative) {
    return result * -1
  } else {
    return result
  }
}

// Runtime: 88 ms, faster than 95.28% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.1 MB, less than 64.99% of JavaScript online submissions for Reverse Integer
