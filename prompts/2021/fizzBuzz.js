// Prompt URL: https://leetcode.com/problems/fizz-buzz/

/* eslint-disable no-unused-vars */
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const arr = []

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz')
    } else if (i % 3 === 0) {
      arr.push('Fizz')
    } else if (i % 5 === 0) {
      arr.push('Buzz')
    } else {
      arr.push(String(i))
    }
  }

  return arr
}
