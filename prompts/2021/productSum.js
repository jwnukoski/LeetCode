function productSum(array, depth = 1) {
    let result = null
    
    array.forEach(val => {
        if (Array.isArray(val)) {
            result += productSum(val, depth + 1)
        } else if (result === null) {
            result = val
        } else {
            result += val
        }
    })

    result *= depth

    return result
}