typical definition for a node in singly linked list

// Definition for singly-linked list.
struct SinglyListNode {
    int val;
    SinglyListNode *next;
    SinglyListNode(int x) : val(x), next(NULL) {}
};

In most cases, we will use the head node (the first node) to represent the whole list.

 

Operations
Unlike the array, we are not able to access a random element in a singly-linked list in constant time. If we want to get the ith element, we have to traverse from the head node one by one. It takes us O(N) time on average to visit an element by index, where N is the length of the linked list.

For instance, in the example above, the head is the node 23. The only way to visit the 3rd node is to use the "next" field of the head node to get to the 2nd node (node 6); Then with the "next" field of node 6, we are able to visit the 3rd node.

You might wonder why the linked list is useful though it has such a bad performance (compared to the array) in accessing data by index. We will introduce the insert and delete operations in next two articles and you will realize the benefit of the linked list.

After that, we provide an exercise for you to design your own singly linked list.

  Add Operation - Singly Linked List
Report Issue
If we want to add a new value after a given node prev, we should: 

Initialize a new node cur with the given value;
Link the "next" field of cur to prev's next node next;
Link the "next" field in prev to cur.
Unlike an array, we don’t need to move all elements past the inserted element. Therefore, you can insert a new node into a linked list in O(1) time complexity, which is very efficient.

 

An Example


Let's insert a new value 9 after the second node 6.

We will first initialize a new node with value 9. Then link node 9 to node 15. Finally, link node 6 to node 9.

After insertion, our linked list will look like this:



 
Add a Node at the Beginning
As we know, we use the head node head to represent the whole list.

So it is essential to update head when adding a new node at the beginning of the list.

Initialize a new node cur;
Link the new node to our original head node head.
Assign cur to head.
For example, let's add a new node 9 at the beginning of the list.

We initialize a new node 9 and link node 9 to current head node 23.
Assign node 9 to be our new head.
What about adding a new node at the end of the list? Can we still use similar strategy?

   Delete Operation - Singly Linked List
Report Issue
If we want to delete an existing node cur from the singly linked list, we can do it in two steps:

Find cur's previous node prev and its next node next;
Link prev to cur's next node next.
In our first step, we need to find out prev and next. It is easy to find out next using the reference field of cur. However, we have to traverse the linked list from the head node to find out prev which will take O(N) time on average, where N is the length of the linked list. So the time complexity of deleting a node will be O(N).

The space complexity is O(1) because we only need constant space to store our pointers.

 

An Example


Let's try to delete node 6 from the singly linked list above.

1. Traverse the linked list from the head until we find the previous node prev which is node 23

2. Link prev (node 23) with next (node 15)



Node 6 is not in our singly linked list now.

 

Delete the First Node
If we want to delete the first node, the strategy will be a little different.

As we mentioned before, we use the head node head to represent a linked list. Our head is the black node 23 in the example below.



If we want to delete the first node, we can simply assign the next node to head. That is to say, our head will be node 6 after deletion.



The linked list begins at the head node, so node 23 is no longer in our linked list.

What about deleting the last node? Can we still use similar strategy?