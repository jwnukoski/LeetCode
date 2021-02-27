/* Given an array of integers and a number, write a function called max SubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note taht a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100, 200, 300, 400], 2) = 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) = 39
*/

function maxSubarraySum (arr, n) {
  if (arr.length < n) {
    return null
  }

  let total = 0
  for (let i = 0; i < n; i++) {
    total += arr[i]
  }
  let currentTotal = total
  for (let i = n; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - n]
    total = Math.max(total, currentTotal)
  }
  return total
}
