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
var inorderTraversal = function (root) {
    let res = [];
    dfs(root, res);
    return res

};

function dfs(node, res) {
    if (node !== null) {
        dfs(node.left, res);
        res.push(node.val);
        dfs(node.right, res);
    }
}