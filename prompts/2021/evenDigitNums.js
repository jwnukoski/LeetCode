// Prompt URL: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
  let evenDigitCount = 0

  nums.forEach(num => { if (String(num).length % 2 === 0) { evenDigitCount++ } })

  return evenDigitCount
}
