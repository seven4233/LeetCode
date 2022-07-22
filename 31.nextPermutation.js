/* 
----------------------------------------------(中等)下一个排列-------------------------------------------------------------------------------
        --例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
            类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
            而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。


            输入：nums = [1,2,3]
            输出：[1,3,2]

*/

var nextPermutation = function(nums){

    let i =nums.length - 2
    while (i >=0 &&nums[i] >= nums[i+1]){  //从右至左找到第一个比右邻居小的元素target
        i--
    } 
    if(i>=0){
        let j = nums.length-1       
        while(j>=0 && nums[j] <=nums[i]){     //从右至左找到第一个比target大的元素firstMax
            j--
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]  //交换target和firstMax的值

    }
    let l = i+1
    let r = nums.length -1
    while(l<r){           //将target后面的元素交换,即从小到大排序
        [nums[l],nums[r]] = [nums[r], nums[l]]
        l++
        r--
    }
}