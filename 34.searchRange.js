/* 
------------------------------------------------------(中等)在排序数组中查找元素的第一个和最后一个位置------------------------------------------------
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
*/


//定义二分查找的方法
var binarySearch = function(nums, target, lower){ //lower表示要查找的元素是第一个还是最后一个
    let left = 0, right = nums.length-1, ans  = nums.length 
    while(left <= right){
        const mid = (left + right) /2 |0   // |0表示向下取整
        if(nums[mid]>target || (nums[mid] >= target && lower)){
            right = mid -1
            ans = mid
        }
        else{
            left = mid +1
        }
    }
    return ans

}

var searchRange= function(nums,target){
    let ans = [-1,-1]

    let leftIndex = binarySearch(nums, target,true) //获取左边界
    let rightIndex = binarySearch(nums, target,false) -1  //获取右边界 注意减一
    if(leftIndex<=rightIndex && rightIndex <nums.length && nums[leftIndex]===target && nums[rightIndex] ===target){
        ans=[leftIndex, rightIndex]
    }
    return ans


}