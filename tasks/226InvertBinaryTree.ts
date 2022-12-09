interface TreeNode {
  val: number;
  left: TreeNode;
  right:TreeNode;
}

const invertTree = function(root: TreeNode): TreeNode {
  if (!root) {
      return root
  }

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

  return root

};