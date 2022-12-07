// https://leetcode.com/problems/n-ary-tree-level-order-traversal/description/

interface TreeNode {
  val: number;
  children?: TreeNode[];
}

const recursionLevelOrder = (root: TreeNode): number[][] => {
  const result: number[][] = [];

  const traverse = (node, level) => {
      if (!node) return;
      if (!result[level]) 
      {
        result[level] = [node.val]
      } else {
        result[level].push(node.val)
      }

      for (const child of node.children) {
          traverse(child, level + 1);
      }
  }

  traverse(root, 0);

  return result;
};


const levelOrder = (root: TreeNode):number[][] => {
  const result: number[][] = [];

  if (!root) return result;

  const q = [root];

  let level = 0;
  while (q.length) {
      result[level] = [];
      const currentLen = q.length;
      for (let i = 0; i < currentLen; i++) {
        const node = q.shift();
        if (node?.val) {
          result[level].push(node.val);
        }
        if (node?.children) q.push(...node.children);
      }
      level++;
  }

  return result;
};