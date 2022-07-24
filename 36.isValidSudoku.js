/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-24 08:19:26
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 08:37:47
 * @FilePath: \LeetCode\36.isValidSudoku.js
 * @Description:  (中等)有效的数独
 * 
 */
var isValidSudoku = function(board){
    // 方向判重
    let rows = {}//行
    let columns = {} //列
    let boxes = {}//3*3小方格

    // 遍历数独
    for(let i = 0; i<9; i++){
        for(let j=0 ; j < 9; j++){
            let num = board[i][j]
            if(num!=='.'){ //遇到有效数字
                const boxesIndex = parseInt(i/3)*3 + parseInt(j/3) // 3*3小方格的位置(0~8)
                if(rows[i+'-'+num] || columns[j + '-' + num] || boxes[boxesIndex + '-' + num]){
                    return false
                }
            }
            // 方向 + 数字组成唯一标识, 诺再次出现，则为重复
            rows[i+'-'+num] = true
            columns[j+'-'+num] = true
            boxes[boxesIndex+'-'+num] = true
        }
    }
    return true
}