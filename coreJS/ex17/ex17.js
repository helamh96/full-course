function isPalindrome(head) {
    if (!head || !head.next) {
        return true;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let reversedHalf = reverseLinkedList(slow);
    let p1 = head;
    let p2 = reversedHalf;

    while (p2) {
        if (p1.val !== p2.val) {
            // Restore the original linked list
            reverseLinkedList(reversedHalf);
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }

    // Restore the original linked list
    reverseLinkedList(reversedHalf);
    return true;
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

module.exports = isPalindrome;
