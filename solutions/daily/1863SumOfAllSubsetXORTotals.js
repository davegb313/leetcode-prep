/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let res = 0;
    for (n of nums) {
        res = res | n
    }

    return res * 2 ** (nums.length - 1)
};


// var subsetXORSum = function (nums) {

//     function dfs(i, total) {
//         if (i === nums.length) {
//             return total;
//         }
//         return dfs(i + 1, total ^ nums[i]) + dfs(i + 1, total);
//     }

//     return dfs(0, 0)
// }