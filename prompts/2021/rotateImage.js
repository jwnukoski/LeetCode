/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
    transpose(matrix)
    reflect(matrix)
    return matrix
}

const transpose = (matrix) => {
    let n = matrix.length
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < n; j++) {
            const tmp = matrix[j][i]
            matrix[j][i] = matrix[i][j]
            matrix[i][j] = tmp
        }
    }
}

const reflect = (matrix) => {
    let n = matrix.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            const tmp = matrix[i][j]
            matrix[i][j] = matrix[i][n - j - 1]
            matrix[i][n - j - 1] = tmp
        }
    }
}

// Input: 
// const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: 
// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


