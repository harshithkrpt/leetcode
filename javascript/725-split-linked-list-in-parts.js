function makeLinkedList(arr) {
  let ll;
  let ptr = ll;
  if (!arr) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!ll) {
      ll = { val: arr[i], next: null };
      ptr = ll;
    } else {
      ptr.next = { val: arr[i], next: null };
      ptr = ptr.next;
    }
  }
  return ll;
}

var splitListToParts = function (root, k) {
  const arr = [];
  while (root) {
    arr.push(root.val);
    root = root.next;
  }
  let parts,
    rem,
    newArr = [];

  if (arr.length < k) {
    parts = 1;
    rem = 0;
  } else {
    parts = Math.floor(arr.length / k);
    rem = Math.floor(arr.length % k);
  }
  for (let i = 1; i <= k; i++) {
    if (!arr.length) newArr.push(null);
    else {
      const splicable = parts + (rem > 0 ? 1 : 0);
      rem--;
      const ll = makeLinkedList(arr.splice(0, splicable));
      newArr.push(ll);
    }
  }

  return newArr;
};
