// TODO Improve
/**
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  if (preorder.length === 1)
    return { val: preorder[0], left: null, right: null };
  const bst = {};
  constructTree(bst, ...paramsReq(preorder));
  return bst;
};

const paramsReq = (arr) => {
  const newArr = new Array(3);
  if (arr.length) {
    newArr[0] = arr[0];
    let rightIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (newArr[0] < arr[i]) {
        rightIndex = i;
        break;
      }
    }

    if (rightIndex !== 0) {
      newArr[1] = arr.slice(1, rightIndex);
      newArr[2] = arr.slice(rightIndex);
    } else {
      newArr[1] = arr.slice(1, arr.length);
      newArr[2] = [];
    }
  }
  return newArr;
};

const constructTree = (bst, root, left, right) => {
  if (!root) {
    return null;
  }
  if (bst) bst.val = root;
  if (left) bst.left = constructTree({}, ...paramsReq(left));
  if (right) bst.right = constructTree({}, ...paramsReq(right));
  return bst;
};
