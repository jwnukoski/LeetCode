class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      const sums = []
      
      const traverse = (node, sum = 0) => {
          sum += node.value
          
          if (!node.left && !node.right) {
              sums.push(sum)
              return sum
          }
          
          if (node.left) {
              traverse(node.left, sum)
          }
          if (node.right) {
              traverse(node.right, sum)
          }
      }
      traverse(root)
      
      return sums
  }