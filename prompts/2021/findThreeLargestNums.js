function findThreeLargestNumbers(array) {
	const sortedArr = array.slice().sort((a, b) => {
		return a - b
	})
	
	return sortedArr.slice(sortedArr.length - 3, sortedArr.length)
}