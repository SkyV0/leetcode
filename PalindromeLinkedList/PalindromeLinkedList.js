/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
//Example 1:
//Input: head = [1,2,2,1]
//Output: true
//Example 2:
//Input: head = [1,2]
//Output: false
//Constraints:
//The number of nodes in the list is in the range [1, 105].
//0 <= Node.val <= 9
 var isPalindrome = function(head) {
    //Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
//Example 1:
//Input: head = [1,2,2,1]
//Output: true
//Example 2:
//Input: head = [1,2]
//Output: false
//Constraints:
//The number of nodes in the list is in the range [1, 105].
//0 <= Node.val <= 9

    let sz = 0;
    let curr = head;
    while (curr) {
        sz++;
        curr = curr.next;
    }
    if (sz === 1) {
        return true;
    }
    let arr = [];
    curr = head;
    for (let i = 0; i < sz; i++) {
        arr.push(curr.val);
        curr = curr.next;
    }
    for (let i = 0; i < sz / 2; i++) {
        if (arr[i] !== arr[sz - 1 - i]) {
            return false;
        }
    }
    return true;
 };