/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let rob1 = 0, rob2 = 0, rob3 = 0, rob4 = 0;
    let nums1 = nums.slice(0, -1);
    let nums2 = nums.slice(1);

    for (let i = 0; i < nums1.length; i++) {
        let temp = Math.max(nums1[i] + rob1, rob2);
        console.log(temp)
        let temp2 = Math.max(nums2[i] + rob3, rob4);
        rob3 = rob4
        rob4 = temp2
        rob1 = rob2;
        rob2 = temp
    }

    return Math.max(rob2, rob4)
};