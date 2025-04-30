/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let res = [];
    dfs(root, res);
    return res

};

function dfs(node, res) {
    if (node !== null) {
        dfs(node.left, res);
        dfs(node.right, res);
        res.push(node.val);
    }
};