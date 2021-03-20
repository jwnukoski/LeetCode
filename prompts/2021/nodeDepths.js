function nodeDepths(root) {
	let depthSum = 0
	
	const traverse = (node, depth = 0) => {
		depthSum += depth
		
		if (node.left) {
			traverse(node.left, depth + 1)
		}
		
		if (node.right) {
			traverse(node.right, depth + 1)
		}
	}
	
	traverse(root)
	
	return depthSum
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}