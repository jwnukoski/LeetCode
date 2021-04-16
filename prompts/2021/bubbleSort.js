function bubbleSort(array) {
	let m = array.length - 1
	let sorted = false
	
	while (!sorted) {
		let swapped = false
		
		for (let i = 0; i <= m; i++) {
			const j = i + 1
			
			if (array[i] > array[j]) {
				swapArrayValues(i, j, array)
				swapped = true
			}
			
			if (!swapped && i === m) {
				sorted = true
				break
			}
		}
		
		m--
	}
	
	return array
}

function swapArrayValues(i, j, array) {
	const temp = array[i]
	array[i] = array[j]
	array[j] = temp
}