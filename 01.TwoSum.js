var twoSum = function (nums, target) {
  let map = new Map();

  for (const [index, num] of nums.entries()) {
    let result = target - num;

    if (map.has(result)) {
      return [map.get(result), index];
    } else {
      map.set(num, index);
    }
  }

  return [-1, -1];
};
