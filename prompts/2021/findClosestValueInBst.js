function findClosestValueInBst(tree, target) {
	let closest = tree.value
	
	const traverse = (tree) => {
		if (tree === null) {
			return
		}
		
		if (closest === target) {
			return target
		}
		
		const nDiff = Math.abs(tree.value - target)
		const oDiff = Math.abs(closest - target)
		if (nDiff < oDiff) {
			closest = tree.value
		}
		
		if (target > tree.value) {
			traverse(tree.right)
		} else if (target < tree.value) {
			traverse(tree.left)
		}
	}
	
	traverse(tree)
	return closest
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
