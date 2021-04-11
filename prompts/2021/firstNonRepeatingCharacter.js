function firstNonRepeatingCharacter(string) {
	const charCounts = {}
	
	for (const char of string) {
		!charCounts[char] ? charCounts[char] = 1 : charCounts[char]++
	}
	
	for (let i = 0; i < string.length; i++) {
		const char = string[i]
		if (charCounts[char] === 1) {
			return i
		}
	}
	
  return -1;
}