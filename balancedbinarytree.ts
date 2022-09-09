// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

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

 function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);

    function maxDepth(root: TreeNode | null): number {
        if (!root) return 0;
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
};