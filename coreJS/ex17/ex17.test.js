const isPalindrome = require("./ex17")

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }

test("test1", () => {
    const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1)))));
    const isPalindrome1 = isPalindrome(head1)
    expect(isPalindrome1).toEqual(true);
})

test("test2", () => {
    const head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
    const isPalindrome2 = isPalindrome(head2)
    expect(isPalindrome2).toEqual(false);
})

test("test3", () => {
    const head3 = null
    const isPalindrome3 = isPalindrome(head3)
    expect(isPalindrome3).toEqual(true);
})

test("test4", () => {
    const head4 = new ListNode(1);
    const isPalindrome4 = isPalindrome(head4)
    expect(isPalindrome4).toEqual(true);
})

