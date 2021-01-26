// Prompt URL: https://leetcode.com/problems/average-waiting-time/
/* eslint-disable no-unused-vars */

/**
 * @param {number[][]} customers
 * @return {number}
 */
const averageWaitingTime = (customers) => {
  // find wait times
  let previousTime = 0
  let total = 0

  customers.forEach(customer => {
    let customerWaitTime = 0

    let diff = 0
    if (previousTime > customer[0]) {
      diff = previousTime - customer[0]
    }

    customerWaitTime = customer[1] + diff
    total += customerWaitTime
    previousTime = customerWaitTime + customer[0]
  })

  return (total / customers.length)
}

// Runtime: 176 ms, faster than 37.50% of JavaScript online submissions for Average Waiting Time.
// Memory Usage: 68.4 MB, less than 28.65% of JavaScript online submissions for Average Waiting Time.
