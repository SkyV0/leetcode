/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    //The number of nodes in the list is sz.
//1 <= sz <= 30
//0 <= Node.val <= 100
//1 <= n <= sz
 //Maintain two pointers and update one with a delay of n steps.
//Given the head of a linked list, remove the nth node from the end of the list and return its head.
//Input: head = [1,2,3,4,5], n = 2
//Output: [1,2,3,5]
//Example 2:
//Input: head = [1], n = 1
//Output: []
//Example 3:
//Input: head = [1,2], n = 1
//Output: [1]

    let sz = 0;
    let curr = head;
    while (curr) {
        sz++;
        curr = curr.next;
    }
    if (sz === 1) {
        return null;
    }
    if (sz === n) {
        return head.next;
    }
    curr = head;
    let prev = null;
    for (let i = 0; i < sz - n; i++) {
        prev = curr;
        curr = curr.next;
    }
    prev.next = curr.next;
    return head;
};