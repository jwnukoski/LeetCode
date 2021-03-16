function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => {
		return a - b
	})
	
	arrayTwo.sort((a, b) => {
		return a - b
	})
	
	let l = 0
	let r = 0
	const least = [arrayOne[l], arrayTwo[r]]
	let lastDiff = Math.abs(arrayTwo[r] - arrayOne[l])

	while (l < arrayOne.length && r < arrayTwo.length) {
        if (lastDiff === 0) {
            return least
        }
        
        if (arrayOne[l] < arrayTwo[r]) {
            l++
        } else {
            r++
        }

        const diff = Math.abs(arrayTwo[r] - arrayOne[l])
        if (diff < lastDiff) {
            lastDiff = diff
            least[0] = arrayOne[l]
            least[1] = arrayTwo[r]
        }
	}
	
	return least
}