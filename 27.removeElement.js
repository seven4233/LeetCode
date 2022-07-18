/* 
    -----------------------------------------------------(简单)移除元素------------------------------------------------------------------------
输入：nums = [3,2,2,3], val = 3
输出： nums = [2,2]

*/

var removeElement = function(nums,val){

    const n = nums.length
    let left = 0
    for(let right =0; right < n; right ++){ //遍历右指针

        if(nums[right]!==val){          //当右指针遇到val时，跳过该值
            nums[left]=nums[right]
            left++
        }
        
    }
    return left

}