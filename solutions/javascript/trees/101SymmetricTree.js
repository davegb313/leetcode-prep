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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) return true;
    return dfs(root.left, root.right);

    function dfs(leftNode, rightNode) {
        if (leftNode == null && rightNode == null) return true;
        if (leftNode == null || rightNode == null) return false;


        return leftNode.val === rightNode.val &&
            dfs(leftNode.left, rightNode.right) &&
            dfs(leftNode.right, rightNode.left);
    }
};