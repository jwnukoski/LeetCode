/* Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are anay duplicates among the arguments passed in. You can solve this usind the frequency counter pattern or multiple pointers patter.

Ex: (1, 2, 3) = false
(1, 2, 2) = true
'a', 'b', 'c', 'a' = true
*/

const areThereDuplicates = (...args) => {
    const counts = {}
    
    for (let i = 0; i < args.length; i++) {
        const arg = args[i]
        if (!counts[arg]) {
            counts[arg] = true
        } else {
            return true
        }
    }

    return false
}