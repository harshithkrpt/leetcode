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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  if (root && !root.left && !root.right) return true;
  if (!root.left) return false;
  if (!root.right) return false;
  const left = levelOrder(root.left, false);
  const right = levelOrder(root.right, true);

  if (left.length !== right.length) {
    return false;
  }
  console.log({ left, right });
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
};

const levelOrder = (root, rev) => {
  const queue = [];
  const sq = [];
  queue.push(root);
  sq.push(root.val);
  while (queue.length) {
    const item = queue.shift();

    if (rev) {
      item.left && queue.push(item.left);
      item.right && queue.push(item.right);

      sq.push(item.right ? item.right.val : null);
      sq.push(item.left ? item.left.val : null);
    } else {
      item.right && queue.push(item.right);
      item.left && queue.push(item.left);

      sq.push(item.left ? item.left.val : null);
      sq.push(item.right ? item.right.val : null);
    }
  }
  return sq;
};
