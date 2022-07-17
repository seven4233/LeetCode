/* 
  --------------------------------------------------（简单）两数之和-------------------------------------------------------------------------------

      输入：nums = [2,7,11,15], target = 9
      输出：[0,1]
      解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 
*/

var twoSum = function (nums, target) {
  let map = new Map(); //定义map

  for (const [index, num] of nums.entries()) {
    let result = target - num; // 定义要查找的结果即为 target - num ， 即：result = 9 - 2 =7

    if (map.has(result)) {
      //因为第二次找的result=2 在map中存在
      //如果找到,则返回result对应的索引值, 以及num的索引值
      return [map.get(result), index];
    } else {
      map.set(num, index); //没有找到，则加入到map中 【num, index】  即：map([[2,1]])
    }
  }

  return [-1, -1]; //没有找到，返回
};
