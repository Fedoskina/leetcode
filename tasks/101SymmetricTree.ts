// Given the root of a binary tree, 
// check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// https://leetcode.com/problems/symmetric-tree/

interface TreeNode {
  [key: string]: any 
  children?: TreeNode[]
}

const isSymmetric = (root: TreeNode): boolean => {
  if (!root) {
      return true
  }
  
  const isMirror = (left: TreeNode, right: TreeNode) => {
      if (!left && !right) {
          return true
      }
      
      if (!left || !right || left.val !== right.val) {
          return false
      }
      
      return isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }
  
  return isMirror(root.left, root.right)
};