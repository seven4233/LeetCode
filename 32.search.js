/* 
    -------------------------------(中等)搜索旋转排序数组--------------------------------------------------------------------------------

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4

*/
var search = function(nums, target){
    let start = 0
    let end = nums.length - 1

    while(start <= end){
        const mid = (start+end)/2|0
        if(nums[mid]===target) return mid
        
        // 左边有序
        if(nums[mid] >= nums[start]){
            // target在start和mid之间
            if(target>=nums[start] && target <nums[mid]){
                end = mid - 1
            }
            // target在mid和end之间
            else{
                start = mid+1
            }
        }
        // 右边有序
        else{
            // target在mid和end之间
            if(target<=nums[end] && target>nums[mid]){
                start = mid+1
            }else{
                end = mid-1
            }
        }

    }
    return -1

}