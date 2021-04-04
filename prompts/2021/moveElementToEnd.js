function moveElementToEnd(array, toMove) {
	let l = 0
	let r = array.length - 1
	
	while (l < r) {
		if (array[r] === toMove) {
			r--
		} else if (array[l] === toMove) {
			const temp = array[r]
			array[r] = array[l]
			array[l] = temp
			r--
		} else {
			l++
		}
	}
	
	return array
}