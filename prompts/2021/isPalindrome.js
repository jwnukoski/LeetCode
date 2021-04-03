function isPalindrome(string) {
	let l = 0
	let r = string.length - 1
	
	while (l < r) {
		if (string[l] !== string[r]) {
			return false
		}
		
		l++
		r--
	}
	
	return true
}
