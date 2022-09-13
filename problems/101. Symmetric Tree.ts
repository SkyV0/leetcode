
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 10
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

 function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }
    return isMirror(root.left, root.right);
};

function isMirror(left: any, right: any): boolean {
    if (!left && !right) {
        return true;
    }
    if (!left || !right) {
        return false;
    }
    if (left.val !== right.val) {
        return false;
    }
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}
