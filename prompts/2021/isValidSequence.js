function isValidSubsequence(array, sequence) {
    let i = 0;
    for (const num of array) {
        console.log(num)
        if (num === sequence[i]) {
            i++
        }
    }
    
    return i >= sequence.length ? true : false
}