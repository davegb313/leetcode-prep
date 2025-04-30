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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
    let [node, height] = dfs(root);
    return node
};

function dfs(node) {
    if (node === null) {
        return [null, 0]
    }
    let [leftNode, leftHeight] = dfs(node.left)
    let [rightNode, rightHeight] = dfs(node.right)

    if (leftHeight > rightHeight) {
        return [leftNode, leftHeight + 1]
    } else if (leftHeight < rightHeight) {
        return [rightNode, rightHeight + 1]
    }
    return [node, 1 + leftHeight]
};