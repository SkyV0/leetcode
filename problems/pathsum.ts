// The number of nodes in the tree is in the range [0, 1000].
// -109 <= Node.val <= 109
// -1000 <= targetSum <= 1000
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

 function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0;
    return pathSumFrom(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);

    function pathSumFrom(root: TreeNode | null, targetSum: number): number {
        if (!root) return 0;
        return (root.val === targetSum ? 1 : 0) + pathSumFrom(root.left, targetSum - root.val) + pathSumFrom(root.right, targetSum - root.val);
    }
};