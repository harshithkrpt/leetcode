/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  Method 1
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      if (target <= nums[r] || nums[mid] > nums[r]) l = mid + 1;
      else r = mid - 1;
    } else {
      if (target >= nums[l] || nums[mid] < nums[l]) r = mid - 1;
      else l = mid + 1;
    }
  }

  return -1;
};

// Method 2
/**
 * @param {number[]} rotated
 * @param {number} target
 * @return {number}
 */
var search2 = function (rotated, target) {
  var left = 0;
  var right = rotated.length - 1;

  // Just a straight binary search.
  while (left <= right) {
    var middle = Math.floor((right + left) / 2);

    // We have found our target.
    if (rotated[middle] === target) {
      return middle;
    }

    // The clever part starts here:
    if (rotated[left] <= rotated[middle]) {
      // If the middle element is greater than the element to the left
      // of it, then that means that the bottom half is strictly increasing
      // from left to middle, i.e. it is sorted and we can just do a normal
      // binary search.

      // Is the target in this range?
      if (rotated[left] <= target && target < rotated[middle]) {
        // 'recurse' down this side
        right = middle - 1;
      } else {
        // 'recurse' down the other side
        left = middle + 1;
      }
    } else {
      // This means that the *top* half must be sorted, because
      // there can only be one place in the entire array where
      // the order is not sorted, and it's on the bottom half.

      if (rotated[middle] < target && target <= rotated[right]) {
        // 'recurse' down this side
        left = middle + 1;
      } else {
        // 'recurse' down the other side
        right = middle - 1;
      }
    }
  }

  return -1;
};
