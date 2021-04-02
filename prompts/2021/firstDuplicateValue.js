function firstDuplicateValue(array) {
	const nums = {}
	
	for (const num of array) {
		if (!nums[num]) {
			nums[num] = true	
		} else {
			return num
		}
	}
	
  return -1;
}