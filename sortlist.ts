/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function sortList(head: ListNode | null): ListNode | null {
//Given the head of a linked list, return the list after sorting it in ascending order.
//The number of nodes in the list is in the range [0, 5 * 104].
//-105 <= Node.val <= 105
//Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
    if (head === null) return null;
    let arr: number[] = [];
    let node = head;
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }
    arr.sort((a, b) => a - b);
    node = head;
    let i = 0;
    while (node !== null) {
        node.val = arr[i];
        node = node.next;
        i++;
    }
    return head;
};