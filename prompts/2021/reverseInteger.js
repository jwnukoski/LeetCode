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

  if (result >= 2147483647 || result <= (2147483648 * -1)) {
    // Constraints: -2^31 <= x <= 2^31 - 1
    return 0
  } else if (isNegative) {
    return result * -1
  } else {
    return result
  }
}

// Runtime: 100 ms, faster than 59.43% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.3 MB, less than 49.90% of JavaScript online submissions for Reverse Integer.
