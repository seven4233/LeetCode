/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-06-28 22:45:04
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 09:03:35
 * @FilePath: \LeetCode\01.TwoSum.js
 * @Description: （简单）两数之和
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
