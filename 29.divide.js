/* 
    -------------------------(中等)两数相除------------------------------------
输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3


*/

const MAX = 2147483647, MIN = -2147483648
var  divide = function(dividend, divisor){

    if(dividend == MIN && divisor == -1){
        return MAX
    }
    let a  = Math.abs(dividend),b = Math.abs(divisor), res = 0
    for(let i =31; i >= 0; i--){
        if((a>>>i)>=b){

            if(i==31){
                a-=MAX
                a-=1
                res-=MIN
            }else{
                a-=b<<i
                res += 1<<i

            }
        }

    }               
    return (dividend > 0)==(divisor > 0) ? res: -res

}