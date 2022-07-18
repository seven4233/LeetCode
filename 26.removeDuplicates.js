/* 
    --------------------------------------------------（简单）删除有序列表中的重复项--------------------------------------------------------
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

*/

var removeDuplicates = function(nums){
    const n = nums.length   //长度为零，直接返回
    if(n===0) return 0  
 
    let fast = 1, slow =1  // 声明快慢指针，从1开始

    while(fast < n) {  //循环终止条件

        if(nums[fast] !== nums[fast-1]){   //当fast不等与 fast-1即不重复时，让slow的值直接跳到等于fast的值
            nums[slow] = nums[fast]
            slow++
            
        }
        fast++   //有重复，则fast右移

    }
  return slow

}