// Prompt URL: https://leetcode.com/problems/high-five/

/* eslint-disable no-unused-vars */
/**
 * @param {number[][]} items
 * @return {number[][]}
 */
const highFive = function (studentsArr) {
  const avgs = {}
  const result = []

  // assign averages to id in an obj
  studentsArr.forEach(student => {
    if (avgs[student[0]] === undefined) {
      avgs[student[0]] = [student[1]]
    } else {
      avgs[student[0]].push(student[1])
    }
  })

  for (const studentId in avgs) {
    // find top 5
    avgs[studentId] = avgs[studentId].sort((a, b) => {
      return b - a
    })
    avgs[studentId] = avgs[studentId].slice(0, 5)

    // find average
    avgs[studentId] = avgs[studentId].reduce((accumulator, currVal) => {
      return accumulator + currVal
    })
    avgs[studentId] = Math.floor(avgs[studentId] / 5)

    // for result format
    result.push([studentId, avgs[studentId]])
  }

  return result
}

// Runtime: 76 ms, faster than 98.21% of JavaScript online submissions for High Five.
// Memory Usage: 40.2 MB, less than 93.21% of JavaScript online submissions for High Five.
