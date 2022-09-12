// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function diameterOfBinaryTree(root: TreeNode | null): number {
    let max = 0;
    maxDepth(root);
    return max;

    function maxDepth(root: TreeNode | null): number {
        if (!root) return 0;
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
};