/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits

Your solution must have the following complexities:
O(N)

(182, 281) = true
(34, 14) = false
(35895789, 5879385) = true
(22, 222) false
*/
const sameFrequency = (int1, int2) => {
    const count = {}
    let intCopy1 = int1;
    let intCopy2 = int2;
    
    while (Math.floor(intCopy1) > 0) {
        const takeAway = intCopy1 % 10;
        if (count[takeAway] !== undefined) {
            count[takeAway]++
        } else {
            count[takeAway] = 1
        }
        intCopy1 = Math.floor(intCopy1 / 10)
    }

    while (Math.floor(intCopy2) > 0) {
        const takeAway = intCopy2 % 10;
        if (count[takeAway] !== undefined && count[takeAway] > 0) {
            count[takeAway]--
        } else {
            return false
        }
        intCopy2 = Math.floor(intCopy2 / 10)
    }
    
    return true
}