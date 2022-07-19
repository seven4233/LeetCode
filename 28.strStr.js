/* 
-----------------------------------------------------（简单)实现strStr()-------------------------------------------------------------------------

!本题采用 KPM 算法，重点是求出next数组(具体求法见官方题解)

输入：haystack = "hello", needle = "ll"
输出：2

*/

var strStr =function(haystack, neddle){

    const n = haystack.length 
    const m = neddle.length
    if(m===0) return -1

// 生成next数组
    const next = new Array(m).fill(0)
    for (let i = 1, j=0; i< m ; i++){
        while(j > 0 && neddle[j]!==neddle[i]){
            j = next[j-1]
        }
        if(neddle[i]===neddle[j]){
            j++
        }
        next[i] = j

    }
// 匹配
  for (i=0,j=0; i < n;i++){
    while(j>0 && haystack[i] !==neddle[j]){ //如果发现不匹配，则 neddle回退到next[j-1]的位置
        j = next[j-1]
    }
    if(haystack[i]===neddle[j]){  //如果相等，j的值加一
        j++
    }
    if(j===m){//匹配条件 
        return i+1-m
    }

  }
  return -1

}