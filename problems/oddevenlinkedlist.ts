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

 function oddEvenList(head: ListNode | null): ListNode | null {
    // The first node is considered odd, and the second node is even, and so on.
    // The number of nodes in the linked list is in the range [0, 104].
    // -106 <= Node.val <= 106
    // Note that the relative order inside both the even and odd groups should remain as it was in the input.
    // You must solve the problem in O(1) extra space complexity and O(n) time complexity.
    if (head === null) return null;
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while (even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};