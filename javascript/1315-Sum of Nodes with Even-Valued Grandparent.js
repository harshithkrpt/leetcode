var sumEvenGrandparent = function (root) {
  const queue = [];
  root.parent = null;
  let sum = 0;
  queue.push(root);
  while (queue.length) {
    const item = queue.shift();
    if (item.left) {
      item.left.parent = item;
      queue.push(item.left);
    }
    if (item.right) {
      item.right.parent = item;
      queue.push(item.right);
    }
  }

  queue.push(root);
  while (queue.length) {
    const item = queue.shift();

    if (item.parent && item.parent.parent && item.parent.parent.val % 2 === 0)
      sum += item.val;

    if (item.left) {
      queue.push(item.left);
    }
    if (item.right) {
      queue.push(item.right);
    }
  }

  return sum;
};
