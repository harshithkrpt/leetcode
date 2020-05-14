var getTargetCopy = function (original, cloned, target) {
  const queue = [];
  queue.push(cloned);
  while (queue.length) {
    const item = queue.shift();
    const left = item.left;
    const right = item.right;
    if (left) queue.push(left);
    if (right) queue.push(right);
    if (item.val === target.val) {
      return item;
    }
  }
};
