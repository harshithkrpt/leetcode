/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let deep = -1;
  const queue = [];
  root.level = 1;
  queue.push(root);
  let sum = 0;
  while (queue.length) {
    const item = queue.shift();
    if (item.level > deep) {
      deep = item.level;
      sum = 0;
    }
    if (item.level === deep) {
      sum += item.val;
    }

    if (item.left) {
      item.left.level = item.level + 1;
      queue.push(item.left);
    }
    if (item.right) {
      item.right.level = item.level + 1;
      queue.push(item.right);
    }
  }

  return sum;
};
