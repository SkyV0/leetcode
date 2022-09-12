// Constraints:
// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104
// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?
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

 function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0;
    let result = 0;
    inorder(root);
    return result;

    function inorder(root: TreeNode | null): void {
        if (!root) return;
        inorder(root.left);
        count++;
        if (count === k) {
            result = root.val;
            return;
        }
        inorder(root.right);
    }
};